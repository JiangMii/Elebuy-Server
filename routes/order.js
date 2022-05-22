const express = require('express')
const router = express.Router()
const orderModel = require('../model/sp_order');

//显示订单列表
//http://localhost:3001/order/search
router.get('/search',(req,res)=> {
    orderModel.findAll({
        raw:true,
    }).then(result=> {
        res.json({
            data: result,
            meta:{
                msg:'获取成功',
                status:200
            }
        })
    }).catch(err=> {
        console.log(err)
    })
})

//修改订单状态
//http://localhost:3001/order/update
router.put('/update',(req,res)=> {
    console.log(req.body)
    orderModel.update({
        order_price:req.body.order.order_price,
        is_send:req.body.order.is_send,
        consignee_addr:req.body.order.consignee_addr,
        pay_status:req.body.order.pay_status,

    },{
        where:{
            order_number:req.body.order.order_number
        }
    }).then(result=> {
        res.json({
            data: result,
            meta: {
                msg:'获取成功',
                status:200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
})

//查看某订单信息
//http://localhost:3001/order/find/${value}
router.get(`/find/:id`,(req,res)=> {
    console.log(req.params.id)
    orderModel.findOne({
        where: {
            order_number: req.params.id
        }
    }).then(result=> {
        res.json({
            data:result,
            meta:{
                msg:'获取成功',
                status:200
            }
        })
    }).catch(err=>{
        console.log(err)
    })
})

//修改地址???
//http://localhost:3001/orders/addr


//查看物流信息
//写死了
//http://localhost:3001/orders/kuaidi
router.get('/kuaidi',(req,res)=> {
    res.json({
        data: [
            {
                "time": "2018-05-10 09:39:00",
                "ftime": "2018-05-10 09:39:00",
                "context": "已签收,感谢使用顺丰,期待再次为您服务",
                "location": ""
            },
            {
                "time": "2018-05-10 08:23:00",
                "ftime": "2018-05-10 08:23:00",
                "context": "[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件",
                "location": ""
            },
            {
                "time": "2018-05-10 07:32:00",
                "ftime": "2018-05-10 07:32:00",
                "context": "快件到达 [北京海淀育新小区营业点]",
                "location": ""
            },
            {
                "time": "2018-05-10 02:03:00",
                "ftime": "2018-05-10 02:03:00",
                "context": "快件在[北京顺义集散中心]已装车,准备发往 [北京海淀育新小区营业点]",
                "location": ""
            },
            {
                "time": "2018-05-09 23:05:00",
                "ftime": "2018-05-09 23:05:00",
                "context": "快件到达 [北京顺义集散中心]",
                "location": ""
            },
            {
                "time": "2018-05-09 21:21:00",
                "ftime": "2018-05-09 21:21:00",
                "context": "快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]",
                "location": ""
            },
            {
                "time": "2018-05-09 13:07:00",
                "ftime": "2018-05-09 13:07:00",
                "context": "顺丰速运 已收取快件",
                "location": ""
            },
            {
                "time": "2018-05-09 12:25:03",
                "ftime": "2018-05-09 12:25:03",
                "context": "卖家发货",
                "location": ""
            },
            {
                "time": "2018-05-09 12:22:24",
                "ftime": "2018-05-09 12:22:24",
                "context": "您的订单将由HLA（北京海淀区清河中街店）门店安排发货。",
                "location": ""
            },
            {
                "time": "2018-05-08 21:36:04",
                "ftime": "2018-05-08 21:36:04",
                "context": "商品已经下单",
                "location": ""
            }
        ],
        meta: { "status": 200, "message": "获取物流信息成功！" }
    })
})

module.exports = router