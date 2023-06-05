require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const User = require("./model/userModel");
mongoose.connect(process.env.DB_URL).then(() => console.log("Connected!"));





app.listen(3000, () => {
  console.log("server is on...");
});
