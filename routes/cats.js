const router = require('express').Router()
const {
  login,
  signup,
  catList,
  addInterest,
  removeInterest,
  updatePreferences
} = require('./../controllers/catsController')
const authMiddleware = require('../middleware/verify-auth')

router.get('/login', login)
router.post('/signup', signup)
router.get('/', authMiddleware, catList)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
router.put('/preferences', updatePreferences)

module.exports = router
