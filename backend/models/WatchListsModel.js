const {model} = require('mongoose');

const WatchListsSchema = require('../schemas/WatchListsSchema');

const WatchListsModel = model("watchlist",WatchListsSchema);

module.exports = {WatchListsModel};