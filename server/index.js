require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const massive = require("massive");
const controller = require("./controller");

app.use(bodyParser.json());
// app.use(cors());

massive({
  host: "ec2-54-243-28-109.compute-1.amazonaws.com",
  port: 5432,
  database: "d72pu5l6ipvvlv",
  user: "oshugtnsipbuzh",
  password: "ae806a7247e864faaed213b0740d0af58d28bc3f677427bd84890614958cd8d9",
  ssl: true
}).then(function(db) {
  app.set("db", db);
});

app.get("/api/houses", (req, res) => {
  const db = req.app.get("db");
  db
    .getAllHouses()
    .then(response => res.status(200).send(response))
    .catch(error => res.status(500).send(error));
});

const port = 3001;
app.listen(port, () => {
  console.log(`The Eagle Has Landed On Port ${port}`);
});
