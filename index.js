const express = require('express')
const app = express()
const catsRoutes = require('./routes/cats')
const interestsRoutes = require('./routes/interests')
const interactionsRoutes = require('./routes/interactions')
const cors = require('cors')

require('./connection/mongoConnection')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('Hola!'))

app.use('/cats', catsRoutes)
app.use('/interests', interestsRoutes)
app.use('/interactions', interactionsRoutes)

app.listen(5001, () => { console.log('Server Express Running!') })
