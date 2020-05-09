const CatModel = require('./../../models/cat')

const signup = async (catData) => {
  try {
    const response = await CatModel(catData).save()
    return { status: 1, response }
  } catch (err) {
    return { status: 2, msg: 'Error saving cat...' }
  }
}

module.exports = signup
