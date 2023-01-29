const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  item_file: String,
  item_name: String,
  item_type: String,
  item_style: String,
  user: String,
});

module.exports = mongoose.model("clothingItem", clothingItemSchema);
