const app = require("./src/app") 
//const port = 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Mãe Carregadeira na porta"  + PORT))



/*app.listen(port, function() {
  console.log(`Estamos na porta ${port}`)
})*/