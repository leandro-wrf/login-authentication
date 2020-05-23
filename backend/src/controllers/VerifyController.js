const User = require('../models/User')

module.exports = {
  async verify (req, res) {
    const { token, id } = req.params

    try {
      await User.update({
        token: token
      }, {
        where: {
          id: id
        }
      })
    } catch (err) {
      return res.status(404).json({ message: 'Token invalid' })
    }

    return res.json({ message: 'Verified' })
  }
}
