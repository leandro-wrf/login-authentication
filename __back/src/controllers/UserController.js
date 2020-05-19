const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const data = await User.findAll()

    return res.json(data)
  },

  async create(req, res) {
    const { user, email, password } = req.body

    try {
      await User.create({
        user,
        email,
        password
      })
    } catch (err) {
      return res
        .send(203)
        .json({ message: 'Verify fields required' })
    }

    return res
      .status(200)
      .json({ message: 'Verify your email' })
  },

  async update(req, res) {
    const { id } = req.params
    const { user } = req.body

    try { 
      await User.update({
        user
      }, {
        where: {
          id: id
        }
      })
    } catch (err) {
      return res.status(404).json({ message: 'Error on servidor' })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      await User.destroy({
        where: {
          id: id
        }
      })
    } catch (err) {
      return res.status(404).json({ message: 'ID is not exists' })
    }

    return res.status(200).json({ message: 'User deleted' })
  }
}
