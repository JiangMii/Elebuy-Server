const Sequelize = require('sequelize')
const DB = require('../config/dbconfig')

const report_1Model= DB.define('sp_report_1',{
    id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    rp1_user_count: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    rp1_area: {
        type:Sequelize.STRING(128),
        allowNull: false
    },
    rp1_date: {
        type:Sequelize.DATE,
        allowNull:false
    }
},{
    freezeTableName:true,
    timestamps:false
})

module.exports = report_1Model;