const express = require('express')
const multer = require('multer')
const routes = express.Router()
const multerConfig = require("./config/multer")
const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')


routes.post('/boxes',BoxController.store)
routes.post('/files',multer(multerConfig).single('file'),FileController.store)

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