const { auth } = require('./../services/catsService')

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

module.exports = {
  login,
  signup,
  catList
}
