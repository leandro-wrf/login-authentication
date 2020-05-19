const { Router } = require('express')
const routes = Router()

const UserController = require('./controllers/UserController')

routes.get('/', UserController.index)
routes.get('/register', UserController.create)

module.exports = routes
