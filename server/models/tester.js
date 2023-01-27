const mongoose = require("mongoose");

const storySchema= new mongoose.Schema({
    creator_name: String,
    content: String
  })