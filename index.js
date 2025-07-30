require('dotenv').config({ quiet: true });
const express = require('express');
const connectDB = require('./config/database');
const postitsRoutes = require('./routes/postitsRoutes');
const cors = require('cors');
const port = process.env.PORT;
const app = express();

// conectando ao banco de dados
connectDB();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configurando cors
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
}));

app.use('/', postitsRoutes); // rotas dos postits

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});