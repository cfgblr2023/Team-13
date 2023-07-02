const express = require("express");
const router = express.Router();
const PathSchema = require("../models/pathSchema");
const VolunteerCollectedSchema = require("../models/volunteerCollectedSchema");
const UserCollectedSchema = require("../models/userCollectedSchema");
const Priority = require("../models/priorityListSchema");

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
  await PathSchema.create(req.body);
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

router.get("/admin/getData", async (req, res) => {
  const data = await UserCollectedSchema.find();
  const count = {};
  data.forEach((element) => {
    if (count[element.pathName]) count[element.pathName] += 1;
    else {
      count[element.pathName] = 1;
    }
  });
  const entries = Object.entries(count);
  entries.sort((a, b) => b[1] - a[1]);
  const sortedObj = Object.fromEntries(entries);
  res.status(201).send({
    message: "Priority List",
    sortedObj,
  });
});
module.exports = router;
