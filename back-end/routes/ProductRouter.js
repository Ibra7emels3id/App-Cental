const express = require('express');
const { AddProductController, GetAllProductsController, DeleteProductController, GetProductController, EditProductController } = require('../controllers/ProductControll');
const AllProducts = express.Router()
const upload = require('../multer/multer')

// All products Api routes
AllProducts.post('/product', upload.single('image'), AddProductController);
AllProducts.get('/product', GetAllProductsController);
AllProducts.delete('/product/:id', DeleteProductController);
AllProducts.get('/product/:id', GetProductController);
AllProducts.put('/product/edit/:id', upload.single('image'), EditProductController);








// Export the router
module.exports = AllProducts;