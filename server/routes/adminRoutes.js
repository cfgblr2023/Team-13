const express = require("express");
const router = express.Router();
const RouteSchema = require("../models/routeSchema");
const VolunteerCollectedSchema = require("../models/volunteerCollectedSchema");
const UserCollectedSchema = require("../models/userCollectedSchema");

router.post("/route", async (req, res) => {
  const {
    ward,
    startingpointlat,
    startingpointlong,
    endingpointlat,
    endingpointlong,
    distance,
  } = req.body;
  if (
    !ward ||
    !startingpointlat ||
    !startingpointlong ||
    !endingpointlat ||
    !distance ||
    !endingpointlong
  ) {
    return res.status(400).send({
      error: "Please fill all the fields",
    });
  }
  // const allRoutes = await Route.find();
  // console.log(allRoutes);
  // console.log(req.body);
  // Route.insertOne(req.body);
  // console.log(allRoutes);
  await RouteSchema.create(req.body);
  res.status(201).json({
    message: "Route saved successfully",
  });
});

router.post("/volunteers", async (req, res) => {
  await VolunteerCollectedSchema.create(req.body);
  res.status(201).json({
    message: "Volunteer data collected successfully",
  });
});

router.post("/users", async (req, res) => {
  await UserCollectedSchema.create(req.body);
  res.status(201).json({
    message: "User data collected successfully",
  });
});

module.exports = router;
