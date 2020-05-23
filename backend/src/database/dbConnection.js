const Sequelize = require('sequelize')
const dbConfig = require('../config/dbConfig')

const User = require('../models/User')

const connection = new Sequelize(dbConfig.development)

User.init(connection)

module.exports = connection
