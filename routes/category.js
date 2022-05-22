var express = require('express');
var router = express.Router();
var categoryModel=require('../model/sp_category');



/**
 * 商品分类数据列表：http://localhost:3000/category/all
 */
router.get('/all', function(req, res, next) {
    categoryModel.findAll({
        raw: true,
    }).then(result => {
        res.json({
            'data': result,
            'meta': {
                'msg': '创建成功',
                'status': 200
            }
        })
    })
});

// http://localhost:3001/category/pall/${value}
router.get('/pall/:id',(req,res)=>{
    console.log(req.params.id)
    categoryModel.findAll({
        where:{
            cat_level:req.params.id
        }
    }).then(result=>{
        console.log(result)
        res.json({
            data:result,

            meta:{
                'msg': '查询成功',
                'status': 200
            }
        })
    })
})

/**
 * 添加分类:http://localhost:3000/category/add
 */
router.post('/add',(req,res) => {
    console.log(req.body.category)
    categoryModel.create({
        cat_name: req.body.category.cat_name,
        cat_pid: req.body.category.cat_pid,
        cat_level: req.body.category.cat_level,
        cat_icon:req.body.category.cat_icon,
        cat_deleted: 1,
        cat_src:req.body.category.cat_src
    }).then(result => {
        res.json({
            'data': result,
            'meta': {
                'msg': '创建成功',
                'status': 200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
})


/**
 * 根据id查询分类:http://localhost:3000/category/find
 */
router.get('/find',(req,res) => {
    categoryModel.findOne({
        where: {
            cat_id:req.query.id,
        },
        raw: true
    }).then(result => {
        res.json({
            'data': {
                'cat_id': result.cat_id,
                'cat_name': result.cat_name,
                'cat_pid': result.cat_pid,
                'cat_level': result.cat_level,
            },
            'meta': {
                'msg': '获取成功',
                'status': 200
            }
        })
    }).catch(err => {
        console.log(err);
    })
})

/**
 * 编辑提交分类:http://localhost:3000/category/update/${value.cat_id}
 */
router.put(`/update/:id`,(req,res) => {
    console.log(req.body.category.cat_id)
   categoryModel.findOne({
       where: {
           cat_id: req.body.category.cat_id
        } 
   }).then(result => {
       result.update({
           cat_name: req.body.category.cat_name,
           cat_icon:req.body.category.cat_icon,
           cat_src:req.body.category.cat_src
       }).then(sss => {
            res.json({
                'data': sss,
                'meta': {
                    'msg': '更新成功',
                    'status': 200
                }
            })
       })
   })
})

/**
 * 删除分类:http://localhost:3001/category/delete/${record}
 */

router.delete('/delete/:id',(req,res) => {
    categoryModel.destroy({
        where: {
            cat_id: req.params.id,
        }
    }).then(result => {
        res.json({
            'data': result,
            'meta': {
                'msg': '删除成功',
                'status': 200
            }
        })
    }).catch(err=>{
        console.log(err);
    })
})

module.exports=router;












