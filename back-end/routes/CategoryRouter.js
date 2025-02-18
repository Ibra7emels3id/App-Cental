const express = require('express');
const { AddCategoryController, GetCategoriesController } = require('../controllers/CategoryControll');
const AllCategory = express.Router();

AllCategory.post('/category' , AddCategoryController)
AllCategory.get('/category' , GetCategoriesController)


module.exports = AllCategory;