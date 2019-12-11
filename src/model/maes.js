// caracteristicas do cliente que estrutura o banco de dados

const mongoose = require('mongoose');
//tipos de dados salvos no banco
const maesSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },//required: true (quando um campo é obrigatorio)
    endereco: { type: String },
    dataNascimento: { type: Date },
    estadoCivil: { type: String },
    telefone: { type: Number },
    habitos: [{
        _id: false,
        vegetariana: { type: Boolean },
        vegana: { Type: Boolean },
        carnista: { Type: Boolean },
        naturalista: { Type: Boolean },
        fumante: { Type: Boolean },
        alcoolica: { Type: Boolean }
    }],
    disponivel: { type: Boolean },
    filhos: [{
        _id: false,
        nome: { type: String },
        idade: { type: String },
    }]

},

    {
        versionKey: false//para nao ter versionamento
    })

const Maes = mongoose.model('Maes', maesSchema);//tem um model no mongoouse e ele é composto pelo Maes e sera consumido assim
module.exports = Maes;


/*const habitosSchema = new mongoose.Schema({

    habitos: [{
        _id: false,
        vegetariana: { type: Boolean },
        vegana: { Type: Boolean },
        carnista: { Type: Boolean },
        naturalista: { Type: Boolean },
        fumante: { Type: Boolean },
        alcoolica: { Type: Boolean }
    }],

},

    {
        versionKey: false//para nao ter versionamento
    })

const Habitos = mongoose.model('Habitos', habitosSchema);//tem um model no mongoouse e ele é composto pelo Maes e sera consumido assim
module.exports = Habitos;*/