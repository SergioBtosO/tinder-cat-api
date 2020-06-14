const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatSchema = new Schema({
  name: String,
  bio: String,
  email: String,
  nick: String,
  gender: String,
  password: String,
  birthday: Date,
  image: String,
  preferences: {
    gender: String,
    ageMin: Number,
    ageMax: Number
  },
  interests: [String]
})

const Cat = mongoose.model('cats', CatSchema)

module.exports = Cat
