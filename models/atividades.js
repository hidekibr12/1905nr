const mongoose = require ('mongoose')

const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega: String,
    Disciplina: String,
    Instrucoes: String,
    usuario:String
})

const atividades = mongoose.model ('atividades',modelo)

module.exports = atividades