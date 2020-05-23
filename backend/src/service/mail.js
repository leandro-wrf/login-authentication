const nodemailer = require('nodemailer')
const auth = require('../config/auth')

const transport = nodemailer.createTransport(auth);

module.exports = transport
