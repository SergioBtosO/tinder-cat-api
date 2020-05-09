const express = require('express')
const app = express()
const catsRoutes = require('./routes/cats')
const interestsRoutes = require('./routes/interests')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./connection/mongoConnection')

app.get('/', (req, res) => res.send('Hola!'))

app.use('/cats', catsRoutes)
app.use('/interests', interestsRoutes)

app.listen(5001, () => { console.log('Server Express Running!') })
