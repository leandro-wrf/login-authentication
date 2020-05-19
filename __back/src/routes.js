const { Router } = require('express')
const routes = Router()

routes.get('/', (req, res) =>
  res.json({ message: 'Server Running' })
)

module.exports = routes
