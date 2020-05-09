const addInterestService = require('./../services/interests/add-interest')
const getAllInterestsService = require('./../services/interests/list-interests')

const addLiked = (req, res) => {
  res.send('Liked')
}

const addUnliked = (req, res) => {
  res.send('Unliked')
}


module.exports = {
  addLiked,
  addUnliked
}
