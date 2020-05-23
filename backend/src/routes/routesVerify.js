const { celebrate, Segments, Joi } = require('celebrate')
const { Router } = require('express')
const routesVerify = Router()

const VerifyController = require('../controllers/VerifyController')

routesVerify.post('/verify_user/:id/:token', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
    token: Joi.string().hex().required()
  })
}), VerifyController.verify)

module.exports = routesVerify
