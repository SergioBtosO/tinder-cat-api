var router = require('express').Router()
const {
  addLiked,
  addUnliked
} = require('./../controllers/interactionsController')
const authMiddleware = require('../middleware/verify-auth')

router.post('/liked', authMiddleware, addLiked)
router.post('/unliked', authMiddleware, addUnliked)

module.exports = router
