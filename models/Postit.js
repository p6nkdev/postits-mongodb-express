const mongoose = require('mongoose');

// definindo o schema para os postits
const postItSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    avaliacao: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    }
}, { timestamps: true });

module.exports = mongoose.model('Postit', postItSchema);