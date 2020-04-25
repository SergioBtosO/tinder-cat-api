const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InteractionSchema = new Schema({
  catId: String,
  cats_likes: [String],
  ats_unlikes: [String],
  cats_matches: [String]
})

const Interaction = mongoose.model('interactions', InteractionSchema)

module.exports = Interaction
