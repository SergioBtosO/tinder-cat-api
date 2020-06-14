const CatModel = require('../../models/cat')

const autologin = async (catId) => {
  try {
    const catLogged = await CatModel.findById(catId)
    if (catLogged) {
      return { status: 1, cat: catLogged }
    }
    return { status: 2, msg: 'cat not found - 404' }
  } catch (err) {
    return { status: 2, msg: 'exception finding cat' }
  }
}

module.exports = autologin
