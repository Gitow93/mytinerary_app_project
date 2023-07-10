const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

router.get("/itinerary", (req, res) => {
  itineraryModel
    .find()
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.get("/itinerary/:id", (req, res) => {
  itineraryModel
    .find({ cityName: req.params.id })
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
