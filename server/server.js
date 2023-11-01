require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

mongoose.connect(process.env.URIKEY).then(() => console.log('Connected to database'));

app.get('/testi', (req, res) => {
    res.json({test: "Serveri toimii"});
});

app.listen(PORT, () => {
    console.log("Server is up and running at port " + PORT);
});