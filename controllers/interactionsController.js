const addLikedService = require('./../services/interactions/add-liked')
const addUnlikedService = require('./../services/interactions/add-unliked')

const addLiked = async (req, res) => {
  const { catLiked } = req.body
  const { catId } = req.query
  try {
    const response = await addLikedService({cat_id:catId}, catLiked)
    res.json(response)
  } catch (err) {
    res.json(err)
  }
}

const addUnliked = async (req, res) => {
  const { catUnliked } = req.body
  const { catId } = req.query
  try {
    const response = await addUnlikedService({cat_id:catId}, catUnliked)
    res.json(response)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  addLiked,
  addUnliked
}
