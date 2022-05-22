/**
 * sp_permission表对应的模型
 *  right.js里面使用
 */

const Sequelize = require('sequelize');
const DB = require('../config/dbconfig');


const permissionModel = DB.define('sp_permission',{
    id: {
        type: Sequelize.INTEGER,
        field: 'ps_id',
        primaryKey: true,
        autoIncrement: true
    },
    authName: {
        type: Sequelize.STRING(255),
        field: 'ps_name',
        allowNull: false,
    },
    pid: {
        type: Sequelize.INTEGER,
        field: 'ps_pid',
        allowNull: false,
    },
    ps_a:{
        type:Sequelize.STRING(32)
    },
    level: {
        type: Sequelize.INTEGER(),
        field: "ps_level",
        allowNull: false,
    },   
    
},{
    freezeTableName: true,
    timestamps: false,
})

module.exports = permissionModel;