const CatModel = require('./../../models/cat')
const InteractionsModel = require('./../../models/interactions')

const listCats = async (catIdData) => {
  try {
    // Consulta el cat activo
    const CatId = await CatModel.findById(catIdData)
    // interacciones del gato activo
    const CatInteractions = (await InteractionsModel.exists({ cat_id: catIdData }))
      ? await InteractionsModel.findOne({ cat_id: catIdData }) : (await InteractionsModel({ cat_id: catIdData }).save())
    // Ids que no debe mostrar en la lista
    const notIds = [
      CatInteractions.cat_id,
      ...CatInteractions.cats_likes,
      ...CatInteractions.cats_unlikes,
      ...CatInteractions.cats_matches
    ]

    // filtro para las preferencia de edad
    const dateCurrent = new Date()

    const dateTo = new Date(dateCurrent.setFullYear(dateCurrent.getFullYear() - CatId.preferences.age_min))

    const dateFrom = new Date(dateCurrent.setFullYear(dateCurrent.getFullYear() - CatId.preferences.age_max))

    // consulta por preferencias e interaciones
    const cats = await CatModel.find({
      gender: CatId.preferences.gender,
      birthday: { $gte: dateFrom, $lte: dateTo },
      interests: { $in: CatId.interests },
      _id: { $nin: notIds }
    })

    return { status: 1, cats }
  } catch (err) {
    return { status: 2, msg: 'Error list cats' }
  }
}

module.exports = listCats
