const express = require("express");
const app = express();

app.use(express.json());
//permite enviar arquivo pela url
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes')(express))

app.listen(3001, error => {
  if (error) throw "Erro de requisiçao";
  console.log("servidor rodando na porta 3001");
});
