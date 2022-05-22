var Sequelize=require('sequelize');
var DB=require('../config/dbconfig');


const managerModel=DB.define('sp_manager',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        field:'mg_id',
        autoIncrement:true
    },
    rid:{
        type:Sequelize.INTEGER,
        allowNull:false,
        field:'role_id',
    },
    username:{
        type:Sequelize.STRING(32),
        allowNull: false,
        field:'mg_name'
    },
    password:{
        type:Sequelize.STRING(64),
        allowNull:false,
        field:'mg_pwd'
    },
    create_time:{
        type:Sequelize.DATE,
        field:'mg_time'
    },
    mobile:{
        type:Sequelize.STRING(32),
      
        field:'mg_mobile',
    },
    mg_state:{
        type:Sequelize.INTEGER,
      
    },
    email:{
        type:Sequelize.STRING(64),
      
        field:'mg_email'
    }},{
    freezeTableName:true,
    timestamps:false
    }
);

module.exports=managerModel;