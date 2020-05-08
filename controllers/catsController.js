const loginService = require('./../services/cats/login')
const signupService = require('./../services/cats/signup')
const addInterestService = require('./../services/cats/add-interest')
const removeInterestService = require('./../services/cats/remove-interest')
const updatePreferencesService = require('./../services/cats/update-preferences')

const login = (req, res) => {
  const { email, pass } = req.query
  const response = loginService(email, pass)
  res.json(response)
}

const signup = async (req, res) => {
  const cat = req.body
  try { 
    const response = await signupService(cat)
    res.json(response)
  } catch (err) {
    res.json(err)
  }

}

const catList = (req, res) => {
  res.send('List')
}

const liked = (req, res) => {
  res.send('Liked')
}

const unliked = (req, res) => {
  res.send('Unliked')
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
  liked,
  unliked,
  addInterest,
  removeInterest,
  updatePreferences
}
