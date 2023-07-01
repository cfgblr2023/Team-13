const mongoose = require("mongoose");

const pathSchema = mongoose.Schema({
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

const Path = mongoose.model("PATH", pathSchema);

module.exports = Path;
