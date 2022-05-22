var express=require('express');
var router=express.Router();
var goodsModel=require('../model/sp_goods');
var categoryModel=require('../model/sp_category');
var good_attrModel=require('../model/sp_goods_attr');

//http://localhost:3000/goods/all 商品列表数据
router.get('/all',function (req,res){
    goodsModel.findAll({
        raw:true,
    }).then(result=>{
        console.log(result)
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
});
//http://localhost:3000/goods/add   添加商品 返回数据有问题

router.post('/add',function (req,res){
    goodsModel.findAndCountAll({
        where:{
            goods_id:req.body.id,
        },
        include:[{
            model:categoryModel,
            as:'sp_category',
            attributes:['cat_id'],
        }],
        raw:true
    }).then(result=>{
        res.json({
            data:result
        })
    }).catch(err=>{
        console.log(err)
    })
});
//http://localhost:3000/goods/find/${value} 根据Id查商品
router.get(`/find/:id`,function (req,res){
    goodsModel.findOne({
        where:{
            goods_id:req.params.id,
        },
        raw:true
    }).then(result=>{
        res.json({
            data:result,
        })
    }).catch(err=>{
        console.log(err)
    })
});
//http://localhost:3001/goods/update/${value.goods_id} 编辑提交商品
router.put(`/update/:id`,function (req,res){
    console.log(req.body.goods)
    goodsModel.findOne({
        where:{
            goods_id: req.body.goods.goods_id,
        },

    }).then(function (user){
        user.update({
           goods_name:req.body.goods.goods_name,
            goods_price:req.body.goods.goods_price,
            goods_number:req.body.goods.goods_number,
            good_weight:req.body.goods.good_weight,
            goods_introduce:req.body.goods.goods_introduce,
            goods_state:req.body.goods.goods_state.type,
            is_promote:req.body.goods.is_promote

        })
    }).then(result=>{
        res.json({
            data:result,
            "meta": {
                "msg": "更新商品成功",
                "status": 201
            }
        })
    })
});
//http://localhost:3001/goods/delete/${id}  删除商品
router.delete(`/delete/:id`,function (req,res){

    console.log(req.params.id)

    goodsModel.destroy({
        where:{
            goods_id:req.params.id
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
//http://localhost:3000/goods/pics  同步商品图片
router.put('/pics',function (req,res){

});
//http://localhost:3000/goods/attr 同步商品属性
router.put('/attr',function (req,res){

});
//http://localhost:3000/goods/upload 图片上传
router.post('/upload',function (req,res){

})

module.exports = router;