const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

mongoose.connect('mongodb+srv://vilijarvinen97:Q4sfKGTxHnBoiKDS@solinavintage.albjgbc.mongodb.net/').then(() => console.log('Connected to database'));

app.listen(PORT, () => {
    console.log("Server is up and running at port " + PORT);
});