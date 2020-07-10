const InteractionsModel = require('../../models/interactions')

const addUnliked = async (catIdData, catUnlikedData) => {
  try {
    
    const CatId = (await InteractionsModel.findOne({ cat_id: catIdData.cat_id }))
      ? await InteractionsModel.findOne({ cat_id: catIdData.cat_id }) : (await InteractionsModel(catIdData).save())

    const CatUnliked = (await InteractionsModel.findOne({ cat_id: catUnlikedData.cat_id }))
      ? await InteractionsModel.findOne({ cat_id: catUnlikedData.cat_id }) : (await InteractionsModel(catUnlikedData).save())

    if (CatId.cats_matches.indexOf(CatUnliked.cat_id) >= 0) {
      // Borra catLiked a matches de catId
      CatId.cats_matches.pull(CatUnliked.cat_id)
    }

    if (CatId.cats_likes.indexOf(CatUnliked.cat_id) >= 0) {
    // Borra catLiked a likes de catId
      CatId.cats_likes.pull(CatUnliked.cat_id)
    }

    if (CatUnliked.cats_matches.indexOf(CatId.cat_id) >= 0) {
      // Borra catLiked a matches de catId
      CatUnliked.cats_matches.pull(CatId.cat_id)
      // Inserta catId a likes de catLiked
      CatUnliked.cats_likes.push(CatId.cat_id)
      await CatUnliked.save()
    }

    CatId.cats_unlikes.push(CatUnliked.cat_id)
    await CatId.save()

    return { status: 1, cat: CatId.cat_id, unliked: CatUnliked.cat_id }
  } catch (err) {
    return { status: 2, msg: 'unliked not added to cat' }
  }
}

module.exports = addUnliked
