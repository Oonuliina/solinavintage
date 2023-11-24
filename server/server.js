require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();
const sessions = require("express-session");
const cookies = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookies());

const aWeek = 1000 * 60 * 60 * 24 * 7;

app.use(sessions({
  name: "SolinaCookie",
  secret: process.env.SESSIONSECRET,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: aWeek },
  resave: false,
}));

var session;

mongoose.connect(process.env.URIKEY)
  .then(() => console.log('Connected to database'))
  .catch((err) => {
    console.log(err)
  });

app.get('/getcart', (req, res) => {
  session = req.session;
  console.log(session)
});

const CryptoJS = require("crypto-js")

//Rekisteröityminen
const Käyttäjäskeema = require("./models/Käyttäjäskeema.js");
const ProductSchema = require("./models/Tuote.js")
//const userRoute = require("./rekisteröityminen");
// userRoute,

app.post('/rekisteroityminen', async (req, res) => {
  console.log(req.body)
  const newKäyttäjä = Käyttäjäskeema({
    Sahkoposti: req.body.Sahkoposti,
    Salasana: CryptoJS.AES.encrypt(req.body.Salasana, process.env.PASSWORD_SECRET)
  });
  const newCart = ProductSchema({
    cartId: req.body.Sahkoposti,
    cartItems: []
  });

  try {
    const checkEmail = await Käyttäjäskeema.findOne({Sahkoposti: req.body.Sahkoposti})
    if (!checkEmail){
      const saved = await newKäyttäjä.save();
      newCart.save();
      res.status(200).json(saved)
      console.log(saved);
    } else {
      res.status(401).json("Sähkoposti on jo käytössä!")
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Login
app.post('/kirjautuminen', async (req, res) => {
  console.log(req.body)

  const checkKäyttäjä = await Käyttäjäskeema.findOne({Sahkoposti: req.body.email})

  if(!checkKäyttäjä){
    res.status(401).json("Sähköpostia ei ole rekisteröity!");
  } else {
    const decryptSalasana = CryptoJS.AES.decrypt(checkKäyttäjä.Salasana, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8);
    if (req.body.passwo === decryptSalasana){
      res.send({token: checkKäyttäjä.Sahkoposti});
    } else {
      res.status(401).json("Salasana on väärin!");
    }
  }
});

app.post('/haekori', async (req, res) => {
  const getCart = await ProductSchema.findOne({cartId: req.body.user})
  if(getCart){
    console.log(getCart)
    res.send(getCart)
  } else {
    res.status(401)
  }
})

app.post('/updatecart', async (req, res) => {
  const filter = {cartId: req.body.cartId};
  const update = {cartItems: req.body.cartItems};
  const updateCart = await ProductSchema.findOneAndUpdate(filter, update, {new: true});
  updateCart;
})

app.listen(PORT, () => {
  console.log("Server is up and running at port " + PORT);
});
