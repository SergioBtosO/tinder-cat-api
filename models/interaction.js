const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InteractionSchema = new Schema({
  cat_id: String,
  cats_likes: [String],
  cats_unlikes: [String],
  cats_matches: [String]
})

const Interaction = mongoose.model('interactions', InteractionSchema)

module.exports = Interaction
