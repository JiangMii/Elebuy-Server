const Sequelize = require('sequelize')
const DB = require('../config/dbconfig')

const report_3Model = DB.define('sp_report_3',{
    id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    rp3_src: {
        type:Sequelize.STRING(127),
        allowNull:false
    },
    rp3_count: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    rp3_date: {
        type:Sequelize.DATE,
        allowNull:false
    }
},{
    freezeTableName:true,
    timestamps:false
})

module.exports = report_3Model;