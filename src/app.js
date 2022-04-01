const express = require('express')
const cors = require ('cors')
const notFound = require('./middleware/notFound')
const handlerError = require('./middleware/handlerError')

const app = express()

//Settings
app.set('port', process.env.PORT || 8001)


app.use(cors())
app.use(express.json())

//Routes
app.use('/api/user', require('./routes/user'))

//Middleware
app.use(notFound)
app.use(handlerError)

module.exports = app