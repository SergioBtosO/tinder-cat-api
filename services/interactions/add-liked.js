const InteractionsModel = require('../../models/interactions')

const addLiked = async (catIdData, catLikedData) => {
  try {
    console.log('Objetos: ', catIdData, catLikedData)

    const CatId = (await InteractionsModel.findOne({ cat_id: catIdData.cat_id }))
      ? await InteractionsModel.findOne({ cat_id: catIdData.cat_id }) : (await InteractionsModel(catIdData).save())

    const CatIdliked = (await InteractionsModel.findOne({ cat_id: catLikedData.cat_id }))
      ? await InteractionsModel.findOne({ cat_id: catLikedData.cat_id }) : (await InteractionsModel(catLikedData).save())

    console.log('Valida: ', CatIdliked)

    if (CatIdliked.cats_likes.indexOf(CatId.cat_id) >= 0) {
      // ingresa catliked a matches de catId
      console.log('Push CatIdMatched')
      CatId.cats_matches.push(CatIdliked.cat_id)
      console.log('Pull CatIdMatched')
      // Borra catId a likes de catLiked
      CatIdliked.cats_likes.pull(CatId.cat_id)
      // ingresa catId a matches de catLiked
      console.log('Push CatIdMatched')
      CatIdliked.cats_matches.push(CatId.cat_id)
      await CatIdliked.save()
      await CatId.save()

      return { status: 1, interaction: 'match', cat: CatId.cat_id, matched: CatIdliked.cat_id }
    } else {
      // ingresa catliked a likes de catId
      console.log('Push CatIdLiked')
      CatId.cats_likes.push(catLikedData.cat_id)
      await CatId.save()
      return { status: 1, interaction: 'like', cat: CatId.cat_id, liked: CatIdliked.cat_id }
    }
  } catch (err) {
    return { status: 2, msg: 'Liked not added to cat', err }
  }
}

module.exports = addLiked
