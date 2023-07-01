const mongoose = require("mongoose");

const volunteerCollectedSchema = mongoose.Schema({
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["point", "line"],
    default: "point",
  },
  image: [
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: true,
    enum: [
      "Encroachment",
      "Obstruction",
      "Waste",
      "Footpath Quality",
      "Unsafe Zones",
    ],
  },
  subcategory: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});

const Volunteer = mongoose.model("VOLUNTEER", volunteerCollectedSchema);

module.exports = Volunteer;
