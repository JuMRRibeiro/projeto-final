const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

mongoose.connect('mongodb+srv://Rep:U8fl7XTEx71SnZoq@cluster0-xelhd.mongodb.net/maes', { useNewUrlParser: true, useFindAndModify: false,
useCreateIndex: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mãe Carregadeira conectada com sucesso ao Mongo.')
})

const maes = require("./routes/maesRoute")

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
app.use(express.static("doc"));
app.use("/api-doc", (req,res)=>{
  res.sendFile(__dirname + "/doc/index.html");
})

app.use(bodyParser.json());
app.use("/maes", maes)



module.exports = app