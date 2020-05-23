const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      email: DataTypes.STRING,
      pass: DataTypes.STRING,
      token: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User
