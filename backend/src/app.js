const express = require('express')
const cors = require('cors')
const app = express()

require('./database/dbConnection')

const router = require('./router')

app.use(cors())
app.use(express.json())
app.use(router)

module.exports = app
