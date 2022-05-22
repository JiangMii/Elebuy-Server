var express = require('express');
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
var router = express.Router();
var managerModel=require('../model/sp_manager');
// http://localhost:3000/users/all 查询所有用户
router.get('/all', function(req, res, next) {

    managerModel.findAll({
    raw:true
}).then(result=>{
        res.json({
            data:result,
            'meta':{
                "msg": "获取成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});
// http://localhost:3001/users/add  创建用户
router.post('/add',function (req,res){
    console.log(req.body.user)
   let pass=req.body.user.pwd;
    let md5=crypto.createHash('md5');
    let newPassword=md5.update(pass).digest('hex');
    managerModel.create({
        rid:req.body.user.rid,
        username:req.body.user.name,
        password:newPassword,
        mobile:req.body.user.mobile,
        email:req.body.user.email,
        mg_state:1,
    }).then(result=>{
        res.json({
            data:{
                res:result,
                modify_time: null,
                is_delete: false,
                is_active: false
            },
            meta:{
                "msg": "用户创建成功",
                "status": 201
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});
//http://localhost:3001/users/update 修改用户
router.put('/update',function (req,res){
    console.log(req.body.data)
    managerModel.findOne({
        where: {
            id: req.body.data.id
        }
    }).then(function (user) {
        user.update({
            username:req.body.data.username,
            mobile:req.body.data.mobile,
            email:req.body.data.email,
            rid: req.body.data.rid,
        })
    }).then(result => {
        res.json({
            data: result,
            "meta": {
                "msg": "修改成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});
//http://localhost:3001/users/change修改用户状态
router.put('/change',function(req,res){
    console.log(req.body.data)
    managerModel.findOne({
        where:{
            id:req.body.data.id
        }
    }).then(function(user){
        user.update({
            mg_state:!req.body.data.state
        })
    }).then(result => {
        res.json({
            data: result,
            "meta": {
                "msg": "修改成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
})
//`http://localhost:3001/users/search` 根据id查询用户状态
router.get('/search',function (req,res){
console.log(req.query.value)

    managerModel.findOne({
        where:{
            username:req.query.value,
        }
    }).then(result=>{
        res.json({
            data:result,
            "meta": {
                "msg": "查询成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});
//http://localhost:3000/users/edit  编辑用户提交
router.put('/edit',function (req,res){


    managerModel.findOne({
        where:{
            id:req.body.id,
        }
    }).then(function (user){
        user.update({
            rid:req.body.rid,
            mobile:req.body.mobile,
            email:req.body.email,
        })
    }).then(result=>{
        res.json({
             'data':result,
            "meta": {
                "msg": "更新成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});
// http://localhost:3000/users/delete/${id}删除单个用户
router.delete(`/delete/:id`,function (req,res){
    managerModel.destroy({
        where:{
            id:req.params.id
        }
    }).then(result=>{
        res.json({
            "data": result,
            "meta": {
                "msg": "删除成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});

module.exports = router;
