const { celebrate, Segments, Joi } = require('celebrate')
const { Router } = require('express')
const routesAuth = Router()

const AuthController = require('../controllers/AuthController.js')

routesAuth.post('/authenticate', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    pass: Joi.string().required()
  })
}), AuthController.auth)

module.exports = routesAuth
