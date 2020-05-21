const { Router } = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const routes = Router()

const UserController = require('./controllers/UserController')

routes.get('/', UserController.index)

routes.post(
  '/authentication/:token',
  AuthenticationController.validation
)

routes.post(
  '/register',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      user: Joi.string().required(),
      email: Joi.string.required(),
      password: Joi.string().required()
    })
  }),
  UserController.create
)

routes.put(
  '/user/id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required()
    }),

    [Segments.BODY]: Joi.object().keys({
      user: Joi.string().required()
    })
  }),
  UserController.update
)

routes.delete(
  '/user/id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required()
    })
  }),
  UserController.delete
)

module.exports = routes
