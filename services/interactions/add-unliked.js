const InteractionsModel = require('../../models/cat')

const addUnliked = async (catId, catUnliked) => {
  try {
    const interaction = await InteractionsModel.findByOne({ cat_id: catId })
    interaction.cats_unlikes.push(catUnliked)
    interaction.save()
    return { status: 1, cat: interaction.cat_id, unliked: catUnliked }
  } catch (err) {
    return { status: 2, msg: 'unliked not added to cat' }
  }
}

module.exports = addUnliked
