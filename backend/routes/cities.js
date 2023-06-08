const express = require("express");

const router = express.Router();

const cityModel = require("../model/cityModel");

router.get("/cities", (req, res) => {
  cityModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/cities", (req, res) => {
  console.log(req.body);
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country,
    // imgUrl: req.body.country,
  });
  newCity
    .save()
    .then((city) => {
      res.send(city).then(location.reload());
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

module.exports = router;
