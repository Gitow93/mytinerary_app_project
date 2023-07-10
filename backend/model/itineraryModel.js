const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  planning: {
    type: Array,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hastags: {
    type: String,
    required: false,
  },
  cityName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
