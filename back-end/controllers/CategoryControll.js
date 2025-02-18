const Category = require("../models/category");

// Add a new category
const AddCategoryController = async (req , res , next) =>{
    const category = await Category.findOne({name: req.body.name})
    if(category) return res.status(400).json({message: "Category already exists"});
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json({message: "Category created successfully" , data: newCategory});
};

// Get all categories
 const GetCategoriesController = async (req , res , next) =>{
    const categories = await Category.find();
    res.json(categories);
};


module.exports = {
    AddCategoryController,
    GetCategoriesController,
}