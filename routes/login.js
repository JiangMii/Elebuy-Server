var express=require('express');
var router=express.Router();
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
var manager=require('../model/sp_manager');


//http://localhost:3000/login/register
router.post('/register',function (req,res){
    let name=req.body.username;
    let password=req.body.password;
    //let rid=req.body.rid;

    let md5=crypto.createHash('md5');
    let newPassword=md5.update(password).digest('hex');
    manager.create({
        username: name,
        password:newPassword,
        mobile: mobile,
        email:email,
        rid:2,
        mg_state:1,
    }).then(result=>{
        res.json({
            code:201,
            msg:'注册成功'
        })
    }).catch(err=>{
        console.log(err);
    })
})


// http://localhost:3001/login/login
router.post('/login',function (req,res){
    let name=req.body.username;
    let password=req.body.password;
    let md5=crypto.createHash('md5');
    let newPassword=md5.update(password).digest('hex');
    manager.findAll({
        where:{
            username:name
        },
        raw:true
    }).then(result=>{
        if(result.length!=0){
            console.log(result[0])
            if(result[0].password===newPassword){
                let token=jwt.sign(result[0],'mimi',{
                    expiresIn: 1440
                })
                res.json({
                    meta:{
                        status:200,
                        msg:'登陆成功！',
                    },
                    data:{
                        result:result,
                        token:token
                    }
                })
            }else{
                res.json({
                    code:422,
                    msg:'密码错误'

                })
            }
        }else{
            res.json({
                code:'423',
                msg:'用户名错误'
            })
        }
    }).catch(err=>{
        console.log(err)
    })
})
module.exports=router;