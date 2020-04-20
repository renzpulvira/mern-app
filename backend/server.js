const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 4000;

app.use(cors());
app.use(express.json());

const userAuth = require("./routes/UserRoutes");

app.use("/api/user", userAuth);

mongoose.connect(
  "mongodb+srv://renz123:<password>@cluster0-yifph.mongodb.net/mern?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connection established 🔑");
  }
);

app.listen(PORT, () => {
  console.log(`App listening to Port: ${PORT}`);
});
