const CatModel = require('./../../models/cat')
const InteractionsModel = require('./../../models/interactions')

const listCats = async (catIdData) => {
  try {
    console.log('catId: ', catIdData)
    const CatId = await CatModel.findById(catIdData)
    console.log('catId: ', CatId)

    const CatInteractions = (await InteractionsModel.exists({ cat_id: catIdData }))
      ? await InteractionsModel.findOne({ cat_id: catIdData }) : (await InteractionsModel({ cat_id: catIdData }).save())

    const notIds = CatInteractions.cats_likes.concat(CatInteractions.cats_unlikes, CatInteractions.cats_matches)
    console.log('Cat Interactions: ', notIds)

    const hoy = new Date()
    console.log('Hoy: ', hoy)
    const dateMax = new Date(hoy.setMonth(hoy.getMonth() - (CatId.preferences.ageMin * 12)))
    console.log('Max: ', dateMax)
    const dateMin = new Date(hoy.setMonth(hoy.getMonth() - (CatId.preferences.ageMax * 12)))
    console.log('Min: ', dateMin)
    const response = await CatModel.find({
      gender: CatId.preferences.gender,
      birthday: { $gte: dateMin, $lte: dateMax },
      interests: { $in: CatId.interests },
      _id: { $ne: notIds }
    })

    // const response = await CatModel.find({interests : CatId.interests, _id :{$ne:catIdData} })

    return { status: 1, response }
  } catch (err) {
    return { status: 2, msg: 'Error list cats' }
  }
}

module.exports = listCats
