const InterestModel = require('./../../models/interest')

const listInterests = async () => {
  try {
    response = await InterestModel.find()
    return { status: 1, response}
  } catch(err) {
    return { status: 2, msg: 'Error list interest' }
  }
}

module.exports = listInterests