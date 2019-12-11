const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()



mongoose.connect('mongodb+srv://Rep:U8fl7XTEx71SnZoq@cluster0-xelhd.mongodb.net/maes', { useNewUrlParser: true, useFindAndModify: false,
useCreateIndex: true, useUnifiedTopology: true });


let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'))// tenta fazer a conexao e fica de olho caso haja algo errado
db.once('open', function () { // faz a conexao e se nao mostra o erro
  console.log('Mãe Carregadeira conectada com sucesso ao Mongo.')// se der certo aparece esta mensagem
})

//rotas
const maes = require("./routes/maesRoute")
//const sessions = require("./routes/sessionRoute")

//app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
app.use(express.static("public"));
 
 //app.get("/maes", function(req, res) {
  //res.json({status: "Você esta logada!"});
  //});
   
//   app.post("/mae", function(req, res) {
//   res.json({status: "Cadastrada!"});
//   });
   
app.use(bodyParser.json());
app.use("/maes", maes)

//app.use("/sessions", sessions)


module.exports = app