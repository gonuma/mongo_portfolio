const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  appid: {
    type: Number,
    require: true,
    unique: true,
  },
  img_icon_url: {
    type: Date,
    require: true,
    unique: false,
  },
  name: {
    type: String,
    require: true,
    unique: false,
  },
});

const Game = mongoose.model("game", gameSchema);

module.exports = Game;
