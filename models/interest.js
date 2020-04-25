const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterestSchema = new Schema({
  interest: [String]
})

const Interest = mongoose.model('interests', InterestSchema)

module.exports = Interest
