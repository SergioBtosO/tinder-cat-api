const CatModel = require('./../../models/cat')

const listCats = async (catIdData) => {
  try {
    const CatId = await CatModel.findById(catIdData)
    console.log('catId: ', CatId)

    const hoy = new Date()
    console.log('Hoy: ', hoy)
    const dateMin = new Date(hoy.setMonth(hoy.getMonth() - (CatId.preferences.ageMin * 12)))
    console.log('Min: ', dateMin)
    const dateMax = new Date(hoy.setMonth(hoy.getMonth() - (CatId.preferences.ageMax * 12)))
    console.log('Max: ', dateMax)
    const response = await CatModel.find({
      gender: CatId.preferences.gender,
      birthday: { $gte: dateMax, $lte: dateMin }
    })
    // const response = await CatModel.find({interests : CatId.interests, _id :{$ne:catIdData} })

    return { status: 1, response }
  } catch (err) {
    return { status: 2, msg: 'Error list cats' }
  }
}

module.exports = listCats
