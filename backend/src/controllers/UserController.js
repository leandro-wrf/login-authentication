const User = require('../models/User')
const crypto = require('crypto')
const mail = require('../service/mail')

module.exports = {
  async index (req, res) {
    const data = await User.findAll({
      attributes: ['id', 'email', 'created_at']
    })

    return res.status(200).json(data)
  },

  async create (req, res) {
    const { email, pass } = req.body

    if (await User.findOne({ where: { email: email } })) {
      return res.status(400).json({ message: 'Email already exists' })
    }

    try {
      await User.create({
        email,
        pass
      })
    } catch (err) {
      return res.status(400).json({ message: 'Verify fields required' })
    }

    const { id } = await User.findOne({
      attributes: ['id'],
      where: { email: email }
    })

    const token = crypto.randomBytes(20).toString('hex')

    mail.sendMail({
      to: 'to@exampĺe.com',
      subject: 'test message',
      html: `<a href="localhost:3333/${id}/${token}">Click</a>`
    })

    return res.status(201).json({ email, token, id })
  }
}
