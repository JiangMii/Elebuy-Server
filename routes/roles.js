var express=require('express');
var router=express.Router();
var roleModal=require('../model/sp_role');


/**
 *  还要改响应的参数不对！！！！！！！ 赵
 *
 * 角色列表：http://localhost:3001/roles/all
 */
router.get('/all', function(req, res, next) {
    roleModal.findAll({
        raw: true,
    }).then(result => {
        res.json({
            'data': result,
            'meta': {
                'msg': '获取成功',
                'status': 200
            }
        })
    })
});
/*
  添加角色：
   http://localhost:3001/roles/add
*/
router.post('/add',(req,res)=> {
    roleModal.create({
        roleName: req.body.value.roleName,
        roleDesc: req.body.value.roleDesc,
}).then(result=>{
    res.json({
        code:200,
        msg:'创建成功！',
        data:result,
    })
    }).catch(err=>{
        console.log(err)
    })
});


/**
 * 根据ID查询角色： http://localhost:3001/roles/findOne
 */

router.get('/findOne',(req,res) => {
    console.log(req.query.id)
    roleModal.findOne({
        where: {
            roleId: req.query.id,
        }
    }).then(result => {
        let arr=result.ps_ids.split(',');
        res.json({
            'data': arr,
            'mats': {
                'msg': '获取成功',
                'status': 200
            }
        })
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
})


/**
 * 编辑提交角色： http://localhost:3000/roles/update
 */

router.put('/update',(req,res) => {
   console.log(req.body.data.roleId)
    roleModal.findOne({
        where: {
            roleId: req.body.data.roleId,
        }
    }).then(result => {
        result.update({
            roleName: req.body.data.roleName,
            roleDesc: req.body.data.roleDesc
        }).then(sss => {
            res.json({
                'data': sss,
                'meta': {
                    'msg': '获取成功',
                    'status': 200
                }
            })
        })
    })
})

/**
 * 删除角色： http://localhost:3001/roles/delete
 */
router.delete('/delete',(req,res) => {
console.log(req.body.id)
    roleModal.destroy({
        where: {
            roleId: req.body.id,
        }
    }).then(result => {
        res.json({
            'data': result,
            'meta': {
                'msg': '删除成功',
                'status': 200
            }
        })
    })
})

/**
 * 角色授权： http://localhost:3001/roles/roleId/${id}
 */
router.post(`/roleId/:id`,(req,res) => {
    console.log(req.body.arr)
    console.log(req.params.id)

roleModal.findOne({
    where:{
        roleId:req.params.id,
    }
}).then(function (user){
let arr=req.body.arr
    let str=arr.toString();
    user.update({
    ps_ids:str,
    })
    console.log(str)
}).then(result=>{
    res.json({
        data:result,
        meta:{
            msg:'分配权限成功',
            status:200,
        }
    })
})
});


/**
 * 删除角色指定权限：http://127.0.0.1:8888/api/private/v1/roles/:roleId/rights/:rightId
 */

router.delete('/roles/:roleId/rights/:rightId',(req,res) => {

})
module.exports=router;