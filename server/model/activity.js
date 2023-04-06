const { Int32, Double } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activityID: {
    type: Number,
    require: true,
    unique: true,
  },
  //   start_date: {
  //     type: Date,
  //     require: true,
  //     unique: false,
  //   },
  achievements: {
    type: Number,
    require: false,
    unique: false,
  },
  averageSpeed: {
    type: Number,
    require: false,
    unique: false,
  },
  averageHeartRate: {
    type: Number,
    require: false,
    unique: false,
  },
  type: {
    type: String,
    require: true,
    unique: false,
  },
  distance: {
    type: Number,
    require: false,
    unique: false,
  },
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;
