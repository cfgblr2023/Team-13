const express = require("express");
const router = express.Router();
const Route = require("../models/routeSchema");

router.post("/route", async (req, res) => {
  console.log(req.body);
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
  await Route.create(req.body);
  res.status(201).json({
    message: "Route saved successfully",
  });
});

module.exports = router;
