const mongoose = require('mongoose');


const ProductsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    daily_price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        default: 0
    },
    seat:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default: 'active'
    },
    fuel:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    distance_traveled:{
        type:Number,
        default: 0
    },
    motion_transfer:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default: new Date().toDateString()
    }
})

const Products = mongoose.model('Products', ProductsSchema);
module.exports = Products;