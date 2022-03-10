//ADD MONGOOSE
const mongoose = require('mongoose');

//CREATE THE MONGOOSE SCHEMA
const thingSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true }, 
  manufacturer: { type: String, required: true }, 
  description: { type: String, required: true },
  mainPepper: {type: String, required: true },
  imageUrl: { type: String, required: true },
  ingredient: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

//EXPORT THE MODULE
module.exports = mongoose.model('Thing', thingSchema);