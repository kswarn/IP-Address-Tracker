const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/iptrack");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/ipTrack", router);

mongoose
  .connect("mongodb://localhost/iptrack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.log("Error: Couldn't connect to MongoDB," + err));

app.listen(4000, () => console.log("Listening on 4000."));
