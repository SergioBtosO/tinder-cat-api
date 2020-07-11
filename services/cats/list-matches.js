const CatModel = require('./../../models/cat')
const InteractionsModel = require('./../../models/interactions')

const listMatches = async (catIdData) => {
  try {
    // Consulta el cat activo
    const CatId = await CatModel.findById(catIdData)
    // interacciones del gato activo
    const CatInteractions = (await InteractionsModel.exists({ cat_id: catIdData }))
      ? await InteractionsModel.findOne({ cat_id: catIdData }) : (await InteractionsModel({ cat_id: catIdData }).save())

    const matches = await CatModel.find({
      _id: { $in: CatInteractions.cats_matches }
    })

    return { status: 1, matches }
  } catch (err) {
    return { status: 2, msg: 'Error list matches' }
  }
}

module.exports = listMatches
