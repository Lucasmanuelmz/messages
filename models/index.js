const {DataTypes} = require('sequelize');
const DB = require('../databases/index')

const Messages = DB.define('message', {
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Messages;