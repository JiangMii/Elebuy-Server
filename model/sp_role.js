var Sequelize=require('sequelize');
var DB=require('../config/dbconfig');

const roleModel=DB.define('sp_role',{
    roleId:{
        type:Sequelize.INTEGER,
        field:'role_id',
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    roleName:{
        type:Sequelize.STRING(20),
        field: 'role_name',
        allowNull: false
    },
    ps_ids:{
        type:Sequelize.STRING(255),
    },
    roleDesc:{
        type:Sequelize.TEXT,
        field:'role_desc',
        allowNull:false
    }
},{
        freezeTableName:true,
        timestamps:false
    }
)
module.exports=roleModel;