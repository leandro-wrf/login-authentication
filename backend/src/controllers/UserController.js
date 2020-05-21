const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
  async index(req, res) {
    const data = await User.findAll({
      attributes: ['user', 'email']
    })

    return res.json(data)
  },

  async create(req, res) {
    const { user, email, password } = req.body
    const data = {
      user,
      email,
      password
    }

    const token = jwt.sign(data, process.env.PRIVATEKEY, {
      expiresIn: 60 * 5
    })

    return res.status(200).json({ message: token })
  },

  async update(req, res) {
    const { id } = req.params
    const { user } = req.body

    try {
      await User.update(
        {
          user
        },
        {
          where: {
            id: id
          }
        }
      )
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'Error on servidor' })
    }
  },

  async delete(req, res) {
    const { id } = req.params

    try {
      await User.destroy({
        where: {
          id: id
        }
      })
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'ID is not exists' })
    }

    return res.status(200).json({ message: 'User deleted' })
  }
}
