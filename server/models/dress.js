const mongoose = require("mongoose");

const DressSchema = new mongoose.Schema({
    item_name: String,
    item_warmth: String,
    item_color: String,
    item_style: String,
    image_ref: String,
})

module.exports=mongoose.model('dress',DressSchema)