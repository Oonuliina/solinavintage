require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();
const sessions = require("express-session");
const cookies = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookies());

const aWeek = 1000 * 60 * 60 * 24 * 7;

app.use(sessions({
    secret: process.env.SESSIONSECRET,
    saveUninitialized: true,
    cookie: {maxAge: aWeek},
    resave: false
}));

var session;

mongoose.connect(process.env.URIKEY).then(() => console.log('Connected to database'));

app.all('*', (req, res) => {
    session = req.session;
    console.log(session);
});

app.get('/testi', (req, res) => {
    res.json({test: "Serveri toimii"});
});

app.listen(PORT, () => {
    console.log("Server is up and running at port " + PORT);
});