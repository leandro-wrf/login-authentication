const { Router } = require('express')
const router = Router()

const routesUser = require('./routes/routesUser')
const routesVerify = require('./routes/routesVerify')
const routesAuth = require('./routes/routesAuth.js')

router.use(routesVerify)
router.use(routesUser)
router.use(routesAuth)

module.exports = router
