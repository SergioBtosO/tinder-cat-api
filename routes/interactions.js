var router = require('express').Router()
const {
    addLiked,
    addUnliked
} = require('./../controllers/interactionsController')

router.post('/', addLiked)
router.get('/', addUnliked)

module.exports = router
