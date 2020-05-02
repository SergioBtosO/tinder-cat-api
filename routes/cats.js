const router = require('express').Router()
const {
  login,
  signup,
  catList,
  liked,
  unliked,
  addInterest,
  removeInterest,
  updateInterest,
  updatePreferences
} = require('./../controllers/catsController')

router.get('/login', login)
router.get('/signup', signup)
router.get('/', catList)
router.post('/liked', liked)
router.post('/unliked', unliked)
router.post('/interest', addInterest)
router.put('/interest', updateInterest)
router.delete('/interest', removeInterest)
router.put('/preferences', updatePreferences)

module.exports = router
