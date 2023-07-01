const mongoose = require("mongoose");

const userCollectedSchema = mongoose.Schema({
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
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
  ward: {
    type: String,
    required: true,
  },
  pathName: {
    type: String,
    required: true,
  },
});

const UserCollected = mongoose.model("UserCollected", userCollectedSchema);

module.exports = UserCollected;
