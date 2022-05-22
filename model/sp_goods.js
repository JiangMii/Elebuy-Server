var Sequelize=require('sequelize');
var DB=require('../config/dbconfig');
var categoryModel=require('../model/sp_category');

const goodsModel=DB.define('sp_goods',{
    goods_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    goods_name:{
        type:Sequelize.STRING(255),
        allowNull:false,
    },
    goods_price:{
        type:Sequelize.DECIMAL(10),
        allowNull: false,
    },
    goods_number:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    goods_weight:{
        type:Sequelize.DECIMAL(10),
        allowNull:false,
    },
    // add_time:{
    //     type:Sequelize.DATE,
    //
    //
    // },
    // upd_time:{
    //     type:Sequelize.DATE,
    //
    // },
    hot_number:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    is_promote:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    goods_introduce:{
         type:Sequelize.TEXT,
    },
    goods_state:{
        type:Sequelize.INTEGER,
        allowNull:false
    }}, {
    freezeTableName: true,
    timestamps: false

});
// goodsModel.belongsTo(categoryModel,{foreignKey:'cat_id',targetKey:'cat_id'})
module.exports=goodsModel;