const mongoose = require("mongoose");

const routeSchema = mongoose.Schema({
  ward: {
    type: String,
    required: true,
  },
  startingpointlat: {
    type: String,
    required: true,
  },
  startingpointlong: {
    type: String,
    required: true,
  },
  endingpointlat: {
    type: String,
    required: true,
  },
  endingpointlong: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});

const Routess = mongoose.model("ROUTE", routeSchema);

module.exports = Routess;
