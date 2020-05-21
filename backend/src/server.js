const server = require('./app')

const PORT = process.env.PORT

require('./database/dbConnection.js')

server.listen(PORT, '192.178.31.101', () =>
  console.log(`Server is running:${PORT}`)
)
