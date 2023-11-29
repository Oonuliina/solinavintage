/* Defining dependecies */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();
const sessions = require("express-session");
const cookies = require("cookie-parser");

/* Use dependecies */
app.use(cors());
app.use(express.json());
app.use(cookies());

/* Defining a week in milliseconds: 1s -> 1min -> 1 hour -> 1 day -> 1 week */
const aWeek = 1000 * 60 * 60 * 24 * 7;

/* Not really used in the project, but here we define a session */
app.use(sessions({
  name: "SolinaCookie",
  secret: process.env.SESSIONSECRET,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: aWeek },
  resave: false,
}));

/* Empty variable for the session we are going to start */
var session;

/* Connecting to the database with mongoose */
mongoose.connect(process.env.URIKEY)
  .then(() => console.log('Connected to database'))
  .catch((err) => {
    console.log(err)
  });

/* Starting the session */
app.get('/getcart', (req, res) => {
  session = req.session;
  console.log(session)
});

/* Another dependency */
const CryptoJS = require("crypto-js")

/* Defining schemas for database usage */
const Käyttäjäskeema = require("./models/Käyttäjäskeema.js");
const ProductSchema = require("./models/Tuote.js")

/* Registration */
app.post('/rekisteroityminen', async (req, res) => {
  /* We get the user inputted email and password from the front end */
  console.log(req.body)
  /* Defining how we connect the request with the user schema and in the process encrypting the password */
  const newKäyttäjä = Käyttäjäskeema({
    Sahkoposti: req.body.Sahkoposti,
    Salasana: CryptoJS.AES.encrypt(req.body.Salasana, process.env.PASSWORD_SECRET)
  });
  /* Defining how we create a user specific shopping cart in the database usng the shopping cart schema */
  const newCart = ProductSchema({
    cartId: req.body.Sahkoposti,
    cartItems: []
  });

  /* Try and make contact with the database... */
  try {
    /* ...first checking if the inputted email is already in the database */
    const checkEmail = await Käyttäjäskeema.findOne({Sahkoposti: req.body.Sahkoposti})
    /* If the email was not there... */
    if (!checkEmail){
      /* ...we save the email and encrypted password... */
      const saved = await newKäyttäjä.save();
      /* ...and create a cart for the new user */
      newCart.save();
      res.status(200).json(saved)
      console.log(saved);
    /* If the email was already in the database... */
    } else {
      /* ...we return a status and tell the user the email is already in use */
      res.status(401).json("Sähkoposti on jo käytössä!")
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

/* Login */
app.post('/kirjautuminen', async (req, res) => {
  /* First off we check if the user exists and find it */
  const checkKäyttäjä = await Käyttäjäskeema.findOne({Sahkoposti: req.body.email})
  /* If user was not found in the database... */
  if(!checkKäyttäjä){
    /* ...we return a status and tell the user that the inputted email has not been registered */
    res.status(401).json("Sähköpostia ei ole rekisteröity!");
  /* If we find the user... */
  } else {
    /* ...we decrypt the password from the database matching the user... */
    const decryptSalasana = CryptoJS.AES.decrypt(checkKäyttäjä.Salasana, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8);
    /* ...and we check if the inputted password matches to the decrypted password */
    if (req.body.passwo === decryptSalasana){
      /* If the password matched we return a login token to the front end */
      res.send({token: checkKäyttäjä.Sahkoposti});
    } else {
      /* If the password didn't match we return a status and tell the user that the password did not match the email */
      res.status(401).json("Salasana on väärin!");
    }
  }
});

/* Path to find the matching cart to user logged in */
app.post('/haekori', async (req, res) => {
  /* First we find the cart matching the user */
  const getCart = await ProductSchema.findOne({cartId: req.body.user})
  /* When cart is found we return it to the front end */
  if(getCart){
    res.send(getCart)
  /* Somewhat pointless to have the else statement, because cart is always created when user is registered and WILL be found */  
  } else {
    res.status(401)
  }
})

/* Updating the cart */
app.post('/updatecart', async (req, res) => {
  /* Defining which cart we want to update */
  const filter = {cartId: req.body.cartId};
  /* Defining what we want to update -> cart items */
  const update = {cartItems: req.body.cartItems};
  /* Find the cart and update it */
  const updateCart = await ProductSchema.findOneAndUpdate(filter, update, {new: true});
  updateCart;
})

/* Backend is running at set port */
app.listen(PORT, () => {
  console.log("Server is up and running at port " + PORT);
});
