const loginService = require('./../services/cats/login')
const signupService = require('./../services/cats/signup')
const addInterestService = require('./../services/cats/add-interest')
const removeInterestService = require('./../services/cats/remove-interest')
const updatePreferencesService = require('./../services/cats/update-preferences')
const getAllCatsService = require('./../services/cats/list-cats')
const autologinService = require('../services/cats/autologin')
const getMatchesService = require('./../services/cats/list-matches')

const login = async (req, res) => {
  const { email, password } = req.query
  const response = await loginService(email, password)
  res.json(response)
}

const signup = async (req, res) => {
  const cat = req.body
  const response = await signupService(cat)
  res.json(response)
}

const autologin = async (req, res) => {
  const { catId } = req.query
  const response = await autologinService(catId)
  res.json(response)
}

const catList = async (req, res) => {
  const { catId } = req.query
  const response = await getAllCatsService(catId)
  res.json(response)
}

const matchesCat = async (req, res) => {
  const { catId } = req.query
  const response = await getMatchesService(catId)
  res.json(response)
}

const addInterest = async (req, res) => {
  const { catId } = req.query
  const { interestId } = req.body
  const response = await addInterestService(catId, interestId)
  res.json(response)
}

const removeInterest = async (req, res) => {
  const { interestId } = req.body
  const { catId } = req.query
  const response = await removeInterestService(catId, interestId)
  res.json(response)
}

const updatePreferences = async (req, res) => {
  const { preferences } = req.body
  const { catId } = req.query
  const response = await updatePreferencesService(catId, preferences)
  res.json(response)
}

module.exports = {
  login,
  signup,
  catList,
  addInterest,
  removeInterest,
  updatePreferences,
  autologin,
  matchesCat
}
