// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();

// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth.routes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('✅ API SecureAuth está rodando!');
});

// Conecta ao banco de dados e inicia o servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
});