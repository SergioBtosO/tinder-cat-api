var router = require('express').Router()
const {
  addLiked,
  addUnliked
} = require('./../controllers/interactionsController')

router.post('/liked', addLiked)
router.post('/unliked', addUnliked)

module.exports = router
