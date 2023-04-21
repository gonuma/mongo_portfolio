const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const badgeSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: false,
  },
  description: {
    type: String,
    require: true,
    unique: false,
  },
  img_icon_url: {
    type: String,
    require: true,
    unique: false,
  },
});

const Badge = mongoose.model("badge", badgeSchema);

module.exports = Badge;
