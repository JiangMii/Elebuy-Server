var Sequelize=require('sequelize');
var DB=require('../config/dbconfig');
var categoryModel=require('../model/sp_category');
const attrModel=DB.define('sp_attribute',{
    attr_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    attr_name:{
        type:Sequelize.STRING(32),
        allowNull:false,
    },
    cat_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:categoryModel,
            key:'cat_id',
        }
    },
    attr_sel:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    attr_write:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    attr_vals:{
        type:Sequelize.TEXT,
        allowNull:false
    }},{
    freezeTableName:true,
    timestamps:false

});
module.exports=attrModel;