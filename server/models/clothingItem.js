const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  item_name: String,
  item_file: String,
});

module.exports = mongoose.model("clothingItem", clothingItemSchema);
