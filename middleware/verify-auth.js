const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/constants')

const verifyAuth = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer' && req.headers.authorization.split(' ')[1] !== 'null') {
    
    const token = req.headers.authorization.split(' ')[1]
    
    try {
      const payload = jwt.verify(token, SECRET)
      req.query.catId = payload.catId
      next()
    } catch (err) {
      res.status(401).json({ error: 'Unauthorized' })
    }
  } else {
    res.status(400).json({ error: 'Token is required' })
  }
  
}

module.exports = verifyAuth
