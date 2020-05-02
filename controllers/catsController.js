const { auth } = require('./../services/cats/auth')

const login = (req, res) => {
  const { email, pass } = req.query
  const response = auth(email, pass)
  res.json(response)
}

const signup = (req, res) => {
  res.send('Signup')
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

const addInterest = (req, res) => {
  res.send('Add Interest')
}

const removeInterest = (req, res) => {
  res.send('Remove Interest')
}

const updateInterest = (req, res) => {
  res.send('Update Interest')
}

const updatePreferences = (req, res) => {
  res.send('Update Preferences')
}

module.exports = {
  login,
  signup,
  catList,
  liked,
  unliked,
  addInterest,
  removeInterest,
  updateInterest,
  updatePreferences
}
