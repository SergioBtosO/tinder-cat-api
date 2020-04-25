const router = require('express').Router()
const { login, signup, catList } = require('./../controllers/catsController')

router.get('/login', login)
router.get('/signup', signup)
router.get('/catList', catList)

module.exports = router
