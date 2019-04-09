const express = require('express')
const routes = express.Router()
const BoxController = require('./controllers/BoxController')


routes.post('/boxes',BoxController.store)

routes.get('/teste',(req,res) => {
    res.send("<h1>Server rodando noww</h1>")
})

module.exports = routes

// module.exports = (express) => {
//     const routes = express.Router()
//     routes.get('/teste',(req,res) => {
//       res.send("<h1>Server rodando</h1>")
//     })
//      return routes
// }

// module.exports = express => 
//   express.Router().get('/teste',(req,res) => {
//       res.send("<h1>Server rodando agora</h1>")
//   })