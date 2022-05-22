/**
 * sp_category对应的模型
 */

 const Sequelize = require('sequelize');
 const DB = require('../config/dbconfig');


const categoryModel = DB.define('sp_category',{
    cat_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cat_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    cat_pid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cat_level: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cat_deleted: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cat_icon:{
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    cat_src: {
        type: Sequelize.TEXT,

    }
},{
    freezeTableName: true,
    timestamps: false,
})

 module.exports = categoryModel;