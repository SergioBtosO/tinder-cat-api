const jwt = require('jsonwebtoken')
const CatModel = require('../../models/cat')
const constants = require('./../../config/constants')

const login = async (email, pass) => {

  const query = {
    email,pass
  }

  try{
    const cat = await CatModel.findOne(query)

    if (cat) {

      const payload = {
        catId: cat.id,
        name: cat.name
      }

      const token = jwt.sign(payload,constants.SECRET)

      return {
        status: 1,
        token
      }
    }
    return {
      status: 2 , msg:'Cat no exist!'
    }
  }catch(err){
    return { status: 2, msg:'Error login!'   }
  }
}

module.exports =  login
