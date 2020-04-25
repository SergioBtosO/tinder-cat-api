const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db_tinderCat', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => console.error('Error Conection MongoDB!'))
db.once('open', () => console.log('Conection MongoDB Success!'))

module.exports = db
