const router = require('express').Router()
const {
  login,
  signup,
  autologin,
  catList,
  addInterest,
  removeInterest,
  updatePreferences,
  matchesCat
} = require('./../controllers/catsController')
const authMiddleware = require('../middleware/verify-auth')

router.get('/login', login)
router.post('/signup', signup)
router.post('/autologin', authMiddleware, autologin)
router.get('/', authMiddleware, catList)
router.post('/interest', authMiddleware, addInterest)
router.delete('/interest', authMiddleware, removeInterest)
router.put('/preferences', authMiddleware, updatePreferences)
router.get('/matches', authMiddleware, matchesCat)

module.exports = router
