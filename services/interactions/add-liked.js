const InteractionsModel = require('../../models/cat')

const addLiked = async (catId,catLiked) => {
  try {
    const interaction = await InteractionsModel.findByOne({ 'cat_id': catId })
    const interactionLiked = await InteractionsModel.findByOne({ 'cat_id': catLiked })
    
    //si catid existe en los likes en los catliked
    if(interactionLiked.cats_likes.indexOf(catId) >= 0 ){
        interaction.cats_matches.push(catUnliked)
        interaction.save()
        interactionLiked.cats_matches.push(catId)
        interactionLiked.cats_likes.pull(catId)
        interactionLiked.save()

        return { status: 1, interaction:'match',cat: interaction.cat_id, unliked:catUnliked}

    }else{
        interaction.cats_likes.push(catUnliked)
        interaction.save()
        return { status: 1, interaction:'like',cat: interaction.cat_id, unliked:catUnliked}
    }

  } catch(err) {
    return { status: 2, msg: 'unliked not added to cat' }
  }
}

module.exports = addLiked