require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();
const sessions = require("express-session");
const cookies = require("cookie-parser");
const schema = require("./models/Tuote.js")

app.use(cors());
app.use(express.json());
app.use(cookies());

const aWeek = 1000 * 60 * 60 * 24 * 7;

app.use(sessions({
    name: "SolinaCookie",
    secret: process.env.SESSIONSECRET,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: aWeek},
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



//Rekisteröityminen

const Käyttäjäskeema = require("./models/Käyttäjäskeema.js");






app.post('/rekisteröityminen', async (req, res) => {



  const newKäyttäjä = new Käyttäjäskeema({

    Sähköposti: req.body.Sähköposti,
    Salasana: req.body.Salasana,

  });


try{

  res.send('Sähköpostisi on: ' + Sähköposti)  
  res.send('Salasanasi on ' + Salasana)
  const saved = await newKäyttäjä.save();
  res.status(200).json(saved)
  console.log(saved);
}

catch(err){
  res.status(500).json(err);
  console.log(err);
}

});


//Login

app.post("/login"), async (req,res) => {

try{

const Käyttäjä = await Käyttäjäskeema.findOne({Sähköposti: req.body.Sähköposti});
const Salasana = Käyttäjäskeema.Salasana

Salasana !== req.body.Salasana &&
  res.status(401).json('Väärä salasana');
  res.status(200).json(Käyttäjäskeema)
}

catch(err){

  res.status(500).json(err)
}


};









app.listen(PORT, () => {
  console.log("Server is up and running at port " + PORT);
});
