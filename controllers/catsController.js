const loginService = require('./../services/cats/login')
const signupService = require('./../services/cats/signup')
const addInterestService = require('./../services/cats/add-interest')
const removeInterestService = require('./../services/cats/remove-interest')
const updatePreferencesService = require('./../services/cats/update-preferences')
const getAllCatsService = require('./../services/cats/list-cats')

const login = async (req, res) => {
  const { email, pass } = req.query
  const response = await loginService(email, pass)
  res.json(response)
}

const signup = async (req, res) => {
  const cat = req.body
  const response = await signupService(cat)
  res.json(response)
}

const catList = async (req, res) => {
  const { catId } = req.query
  const response = await getAllCatsService(catId)
  res.json(response)
}

const addInterest = async (req, res) => {
  const { catId, interestId } = req.body
  const response = await addInterestService(catId, interestId)
  res.json(response)
}

const removeInterest = async (req, res) => {
  const { catId, interestId } = req.body
  const response = await removeInterestService(catId, interestId)
  res.json(response)
}

const updatePreferences = async (req, res) => {
  const { catId, preferences } = req.body
  const response = await updatePreferencesService(catId, preferences)
  res.json(response)
}

module.exports = {
  login,
  signup,
  catList,
  addInterest,
  removeInterest,
  updatePreferences
}
