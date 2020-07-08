const InterestModel = require('./../../models/interest')

const listInterests = async () => {
  try {
    const interestsList = await InterestModel.find()
    return { status: 1, interestsList }
  } catch (err) {
    return { status: 2, msg: 'Error list interest' }
  }
}

module.exports = listInterests
