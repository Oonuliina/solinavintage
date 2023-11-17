require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URIKEY)
  .then(() => console.log("Connected to database"))
  .catch((err) => {
    console.log(err);
  });

app.get("/testi", (req, res) => {
  res.json({ test: "Serveri toimii" });
});

app.listen(PORT, () => {
  console.log("Server is up and running at port " + PORT);
});
