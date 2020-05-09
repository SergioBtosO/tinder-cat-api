const addLikedService = require('./../services/interactions/add-liked')
const getAllInterestsService = require('./../services/interactions/add-unliked')

const getAll = (req, res) => {
  const response = getAllInterestsService()
  res.json(response)
}

const add = (req, res) => {
  const interest = req.body
  try { 
    const response = await addInterestService(interest)
    res.json(response)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  getAll,
  add
}