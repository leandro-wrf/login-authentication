const User = require('../models/User')
const jwt = require('jsonwebtoken')
const privatekey = require('../config/privatekey')

module.exports = {
  async auth (req, res) {
    const { email, pass } = req.body

    if (!await User.findOne({ where: { email: email } })) {
      return res.status(404).json({ message: 'Email not found' })
    }

    if (!await User.findOne({ where: { pass: pass } })) {
      return res.status(401).json({ message: 'Password invalid' })
    }

    const user = await User.findOne({
      attributes: ['id', 'email', 'created_at'],
      where: {
        email: email
      }
    })

    const token = jwt.sign(user.id, privatekey)

    return res.status(200).json({ user: user.email, token })
  }
}
