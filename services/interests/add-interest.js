const InterestModel = require('./../../models/interest')

const addInterest = async (interestData) => {
  console.log(interestData)
  try {
    const response = await InterestModel(interestData).save()
    return { status: 1, response }
  } catch (err) {
    return { status: 2, msg: 'Error saving interes...' }
  }
}

module.exports = addInterest
