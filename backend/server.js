const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./keys.js").uri;
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
// app.use(mainRoutes);
app.use(("/cities", require("./routes/cities")));
app.use(("/itinerary", require("./routes/itineraries")));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));
