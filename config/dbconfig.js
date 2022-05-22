var Sequelize=require('sequelize');
var DB=new Sequelize('elebuy','root','123456',{
    host:'localhost',
    port:3306,
    dialect:'mysql',
    pool:{
        max:30,
        min:5,
        idle:10000
    }
});
module.exports=DB;