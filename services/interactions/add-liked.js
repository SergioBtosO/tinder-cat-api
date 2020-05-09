const InteractionsModel = require('../../models/interactions')

const addLiked = async (catIdData,catLikedData) => {
  try {

    console.log('Objetos: ',catIdData,catLikedData)

    console.log('Existe?: ',catIdData)
    const CatId = await InteractionsModel.findOne({"cat_id":catIdData.cat_id})
    console.log('Valida: ',CatId)
    
    if(!CatId){
      CatId = await InteractionsModel(catIdData).save()
    } 
    
    console.log('Existe?: ',catLikedData)
    const CatIdliked = await InteractionsModel.findOne({"cat_id":catLikedData.cat_id})
    console.log('Valida: ',CatIdliked)

    if(!CatIdliked){
      console.log('Push CatIdLiked: ',catLikedData.cat_id)
      CatId.cats_likes.push(catLikedData.cat_id)
      CatId.save()
      return {status:1,interaction:'liked',CatId}
    }
    else
    {
      if(CatIdliked.cats_likes.indexOf(CatId.cat_id) >= 0 ){
        //ingresa catliked a matches de catId
          console.log('Push CatIdMatched')
          CatId.cats_matches.push(CatIdliked.cat_id)
          CatId.save()
          //ingresa catId a matches de catLiked
          console.log('Push CatIdMatched')
          CatIdliked.cats_matches.push(CatIdliked.cat_id)
          //Borra catId a likes de catLiked
          CatIdliked.cats_likes.pull(CatIdliked.cat_id)
          CatIdliked.save()
         
          return { status: 1, interaction:'match',cat: CatId.cat_id, matched: CatIdliked.cat_id}
  
        }else{  
          //ingresa catliked a likes de catId
          console.log('Push CatIdLiked')
          CatId.cats_likes.push(catLikedData)
          CatId.save()
          return { status: 1, interaction:'like',cat: CatId.cat_id, liked: CatIdliked.cat_id}
        }
    }
    
  } catch(err) {
    return { status: 2, msg: 'Liked not added to cat',err }
  }
}

module.exports = addLiked