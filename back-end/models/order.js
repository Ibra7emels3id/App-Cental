const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    In_city: {
        type: String,
        required: true,
    },
    off_city: {
        type: String,
        required: true,
    },
    date_on: {
        type: String,
        required: true,
    },
    date_off: {
        type: String,
        required: true,
    },
    time_on: {
        type: String,
        required: true,
    },
    time_off: {
        type: String,
        required: true,
    },
    nameCar: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    status_payment:{
        type: String,
        required: true,
        default: 'Pending',
        enum: ['Pending', 'Confirmed', 'Canceled'],
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

