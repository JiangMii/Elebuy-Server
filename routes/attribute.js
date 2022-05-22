var express = require('express');
var router = express.Router();
var attrModel=require('../model/sp_attributes');

// http://localhost:3000/categories/all 参数列表
router.get('/all',function (req,res){
    let nid=req.query.id;
    attrModel.findAll({
      raw:true,
        where:{
            attr_id:nid,
        }
    }).then(result=>{
        res.json({
            data:result,
            "meta": {
                "msg": "获取成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
})
// http://localhost:3000/categories/add  添加动态参数或者静态属性
// router.post('/add',function (req,res){
//
// })
// http://localhost:3000/categories/delete 删除参数
router.delete('/delete',function (req,res){
    attrModel.destroy({
        where:{
            attr_id:req.body.attr_id,
            cat_id:req.body.id,
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
//http://localhost:3000/categories/find  根据 ID 查询参数
router.get('/find',function (req,res){
    attrModel.findAll({
        where:{
            attr_id:req.query.attr_id,
            cat_id:req.query.id,
        }
    }).then(result=>{
        res.json({
            data:result,
            "meta": {
                "msg": "获取成功",
                "status": 200
            }
        })
    })
});
//http://localhost:3000/categories/update   编辑提交参数
router.put('/update',function (req,res){
    attrModel.findOne({
where:{
    attr_id:req.body.attr_id,
    cat_id:req.body.id,
}
    }).then(function (user){
        user.update({
            attr_name:req.body.attr_name,
            attr_sel:req.body.attr_sel,
            attr_vals:req.body.attr_vals,
        })
    }).then(result=>{
        res.json({
            data:result,
            "meta": {
                "msg": "更新成功",
                "status": 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
});

module.exports = router;
