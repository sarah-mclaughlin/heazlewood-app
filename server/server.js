// const path = require('path')
// const express = require('express')

// const routes = require('./routes/routes')
// // const mailGun = require('./routes/mailgun')

// const server = express()

// server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/recommendations', routes)
// // server.use('/api/v1/mailgun', mailGun)

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })

// module.exports = server

const express = require('express')

const routes = require('./routes/routes')

const server = express()

// Middleware
server.use(express.json())

// Routes
server.use('/api/v1/recommendations', routes)

module.exports = server
