const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  item_type: String,
  item_file: String,
  user: String,
});

module.exports = mongoose.model("clothingItem", clothingItemSchema);
