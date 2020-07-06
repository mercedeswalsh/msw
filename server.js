require('./config')
require('dotenv').config()
const express = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 3001

const app = express()

// middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// ** for when connecting to the db **
// require('mongoose').connection.once('open', () => app.listen(PORT))

app.listen(process.env.PORT || 3001)