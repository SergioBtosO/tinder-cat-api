var router = require('express').Router()
const {
  add,
  getAll
} = require('./../controllers/interestsController')
const authMiddleware = require('../middleware/verify-auth')

router.post('/', add)
router.get('/', authMiddleware, getAll)

module.exports = router
