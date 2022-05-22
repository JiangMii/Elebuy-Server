var Sequelize=require('sequelize');
var DB=require('../config/dbconfig');
var attrModel=require('../model/sp_attributes');
var goodsModel=require('../model/sp_goods');

const good_attrModel=DB.define('sp_goods_attr',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    goods_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    attr_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    attr_value:{
        type:Sequelize.TEXT,

    },
    add_price:{
        type:Sequelize.DECIMAL(8,2),
    }

},{
    freezeTableName: true,
    timestamps: false
});

good_attrModel.belongsTo(attrModel,{foreignKey:'attr_id',targetKey:'attr_id'});
good_attrModel.belongsTo(goodsModel,{foreignKey:'goods_id',targetKey:'goods_id'});

module.exports=good_attrModel;