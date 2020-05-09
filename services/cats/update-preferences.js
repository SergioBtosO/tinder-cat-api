const CatModel = require('../../models/cat')

const updatePreferences = async (catId, preferences) => {
  try {
    const update = { $set: { preferences: preferences } }
    await CatModel.findByIdAndUpdate(catId, update)
    return { status: 1, preferences }
  } catch (err) {
    return { status: 2, msg: 'Error update preferences' }
  }
}

module.exports = updatePreferences
