const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

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

routeSchema.methods.addRoute = async function (
  ward,
  startingpointlat,
  startingpointlong,
  endingpointlat,
  endingpointlong,
  distance
) {
  try {
    this.routes = this.routes.concat({
      ward,
      startingpointlat,
      startingpointlong,
      endingpointlat,
      endingpointlong,
      distance,
    });
    await this.save();
    return this.routes;
  } catch (e) {
    console.log(e);
  }
};

const Routess = mongoose.model("ROUTE", routeSchema);

module.exports = Routess;
