const mongoose = require('mongoose');

const maesSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    endereco: { type: String },
    dataNascimento: { type: Date },
    estadoCivil: { type: String },
    telefone: { type: Number },
    habitos: { type: String},
    disponivel: { type: Boolean },
    filhos: [{
        _id: false,
        nome: { type: String },
        idade: { type: String },
    }]

},

{
    versionKey: false
})

const Maes = mongoose.model('Maes', maesSchema);
module.exports = Maes
