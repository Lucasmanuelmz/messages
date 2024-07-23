const {Sequelize} = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
    process.env.DB, 
    'root',
    process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+02:00'
})

sequelize.authenticate()

module.exports = sequelize;