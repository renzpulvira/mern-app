const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening to Port: ${PORT}`);
});
