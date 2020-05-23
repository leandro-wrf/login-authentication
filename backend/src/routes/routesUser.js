const { celebrate, Segments, Joi } = require('celebrate')
const { Router } = require('express')
const routesUser = Router()

const UserController = require('../controllers/UserController')

routesUser.get('/users', UserController.index)
routesUser.post('/register', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    pass: Joi.string().min(5).required()
  })
}), UserController.create)

module.exports = routesUser
