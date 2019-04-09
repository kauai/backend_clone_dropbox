const express = require("express");
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cors = require('cors')

io.on('connection', socket => {
    socket.on('connectRoom',box => {
        socket.join(box)
    })
})

mongoose.connect('mongodb://omnistack02:omnistack2012@ds135456.mlab.com:35456/omnistack2',{
    useNewUrlParser:true
})

app.use(cors)
app.use((req,res,next) => {
   req.io = io
   return next()
})


app.use(express.json());
//permite enviar arquivo pela url
app.use(express.urlencoded({ extended: true }));
app.use('/files',express.static(path.resolve(__dirname,'..','tmp')))

app.use(require('./routes'))

server.listen(3001, error => {
  if (error) throw "Erro de requisiçao";
  console.log("servidor rodando na porta 3001");
});
