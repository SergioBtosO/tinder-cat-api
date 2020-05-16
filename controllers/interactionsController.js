const addLikedService = require('./../services/interactions/add-liked')
const addUnlikedService = require('./../services/interactions/add-unliked')

const addLiked = async (req, res) => {
  const { catId, catLiked } = req.body
  try {
    const response = await addLikedService(catId, catLiked)
    res.json(response)
  } catch (err) {
    res.json(err)
  }
}

const addUnliked = async (req, res) => {
  const { catId, catUnliked } = req.body
  try {
    const response = await addUnlikedService(catId, catUnliked)
    res.json(response)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  addLiked,
  addUnliked
}
