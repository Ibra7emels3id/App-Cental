const express = require('express');
const { AddOrderClient, GetOrdersClient, GetAllOrdersClient, DeleteOrder , GetOrderView, EditOrderClient, EditOrderStatusClient } = require('../controllers/OrderControll');
const AllOrder = express.Router()

AllOrder.post('/order' , AddOrderClient)
AllOrder.put('/order/edit/:id' , EditOrderClient)
AllOrder.put('/order/status/:id' , EditOrderStatusClient)
AllOrder.get('/order' , GetAllOrdersClient)
AllOrder.get('/order/:id' , GetOrdersClient)
AllOrder.delete('/order/:id' , DeleteOrder)
AllOrder.get('/order/view/:id' , GetOrderView)




module.exports = AllOrder;

