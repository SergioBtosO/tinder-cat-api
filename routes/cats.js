const router = require('express').Router()
const {
  login,
  signup,
  catList,
  addInterest,
  removeInterest,
  updatePreferences
} = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.get('/', catList)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
router.put('/preferences', updatePreferences)

module.exports = router
