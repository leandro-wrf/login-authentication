const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
  async validation(req, res) {
    const { token } = req.params

    const data = jwt.verify(token, process.env.PRIVATEKEY)

    try {
      await User.create({
        user: data.user,
        email: data.email,
        password: data.password
      })
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'token inspirado' })
    }

    return res.status(200).json({ message: 'Email verify' })
  }
}
