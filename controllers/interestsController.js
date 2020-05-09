const addInterestService = require('./../services/interests/add-interest')
const getAllInterestsService = require('./../services/interests/list-interests')

const getAll = async (req, res) => {
  const response = await  getAllInterestsService()
  res.json(response)
}

const add = async (req, res) => {
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