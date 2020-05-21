const Sequelize = require('sequelize')
const config = require('../config/config')

const User = require('../models/User')

const connection = new Sequelize(config.development)

User.init(connection)

module.exports = connection
