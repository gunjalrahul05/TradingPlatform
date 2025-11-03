const { Schema } = require("mongoose");

const WatchListsSchema = Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: Boolean,
});

module.exports={WatchListsSchema};
