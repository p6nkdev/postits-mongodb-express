const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env', quiet: true });

// conectando ao banco de dados
function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Conectado ao MongoDB');
    }).catch(err => {
        console.error('Erro ao conectar ao MongoDB', err);
    });
}

module.exports = connectDB;