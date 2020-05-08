var router = require('express').Router()
const { add, getAll } = require('./../controllers/interestsController')

router.post('/', add)
router.get('/', getAll)

module.exports = router
