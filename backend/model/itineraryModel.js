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
  itineraryInfo: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
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
