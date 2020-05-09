const InteractionsModel = require('../../models/interactions')

const addLiked = async (catIdData,catLikedData) => {
  try {

    console.log(catIdData,catLikedData)
    const id =  catIdData.cat_id
    console.log('Cat',id)
    const interaction = await InteractionsModel.exists({ 'cat_id': id })
    console.log('Cat',interaction)
    if(!interaction){
     const   interaction2 = await InteractionsModel(catIdData).save()
      console.log('Se crea',interaction2)
    }
    console.log(interaction2, "existe")

    id  = catLikedData.call_id
    const interactionLiked = await InteractionsModel.findByOne({ 'cat_id': id })
    if(interactionLiked){

      console.log(interaction,interactionLiked)
      //si catid existe en los likes en los catliked
      if(interactionLiked.cats_likes.indexOf(interaction.cat_id) >= 0 ){
      //ingresa catliked a matches de catId
        interaction.cats_matches.push(interactionLiked.cat_id)
        interaction.save()
        //ingresa catId a matches de catLiked
        interactionLiked.cats_matches.push(interaction.cat_id)
        //Borra catId a likes de catLiked
        interactionLiked.cats_likes.pull(interaction.cat_id)
        interactionLiked.save()

        return { status: 1, interaction:'match',cat: interaction.cat_id, liked: interactionLiked.cat_id}

      }else{
        //ingresa catliked a likes de catId
        interaction.cats_likes.push(catLikedData)
        interaction.save()
        return { status: 1, interaction:'like',cat: interaction.cat_id, liked: catLikedData}
      }
    }else{
      //ingresa catliked a likes de catId
      interaction.cats_likes.push(catLikedData.cat_id)
      interaction.save()
      return { status: 1, interaction:'like',cat: interaction.cat_id, liked: catLikedData}
    }
    

  } catch(err) {
    return { status: 2, msg: 'Liked not added to cat',err }
  }
}

module.exports = addLiked