const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  item_file: String,
  item_name: String,
  item_type: String,
  item_style: String,
  user: String,
  item_color: String,
  item_warmth_score: Number,
});

module.exports = mongoose.model("clothingitems", clothingItemSchema);
