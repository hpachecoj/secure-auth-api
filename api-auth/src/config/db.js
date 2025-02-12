const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log('✅ Conexão com o banco de dados estabelecida!'))
    .catch(err => console.error('❌ Não foi possível conectar ao banco de dados:', err));

module.exports = sequelize;