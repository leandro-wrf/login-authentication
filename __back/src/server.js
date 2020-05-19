const server = require('./app')

const PORT = process.env.PORT

require('./database/dbConnection.js')

server.listen(PORT, () =>
  console.log(`Server is running:${PORT}`)
)
