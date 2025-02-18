const Order = require("../models/order");

// Add To Order 
const AddOrderClient = async (req, res , next) => {
    console.log(req.body);
    try {
        const newOrder = new Order(req.body)
        await newOrder.save();
        res.status(201).json({message: 'Order added successfully' , newOrder});
    } catch (error) {
        next(error);
    }
};

// Edit Order
const EditOrderClient = async (req, res , next) => {
    console.log(req.body);
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json({message: 'Order Update Success' , order});
    } catch (error) {
        next(error);
    }
}

// Edit order Status
const EditOrderStatusClient = async (req, res , next) => {
    console.log(req.body);
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, {status: req.body.status}, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json({message: 'Order status updated successfully' , order});
    } catch (error) {
        next(error);
    }
}

// Get Order Id
const GetOrdersClient = async (req, res , next) => {
    try {
        const orders = await Order.find({userId: req.params.id});
        res.json(orders);
    } catch (error) {
        next(error);
    }
};

// Get All Orders
const GetAllOrdersClient = async (req, res , next) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        next(error);
    }
};

// delete Order
const DeleteOrder = async (req, res , next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        next(error);
    }
}; 

// get Details View
const GetOrderView = async (req, res , next) => {
    try {
        const orders = await Order.findById(req.params.id);
        res.json(orders);
    } catch (error) {
        next(error);
    }
};



module.exports = {
    AddOrderClient,
    GetOrdersClient,
    GetAllOrdersClient,
    DeleteOrder,
    GetOrderView,
    EditOrderClient,
    EditOrderStatusClient,
};