const Products = require("../models/Product");
const cloudinary = require('cloudinary').v2;

// Add product
const AddProductController = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path)
    try {
        console.log(req);
        const newProduct = new Products({
            ...req.body,
            image: result.secure_url,
        });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// get All Products
const GetAllProductsController = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get To Product 
const GetProductController = async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
};

// delete Product
const DeleteProductController = async (req, res) => {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
};

// Edit Product 
const EditProductController = async (req, res, next) => {
    try {
        const productId = await Products.findById(req.params.id)
        if (!productId) {
            return res.status(404).json({ message: "Product not found" });
        }
        let Image = productId.image
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path)
            Image = result.secure_url
        }
        const product = await Products.findByIdAndUpdate(req.params.id, {
            ...req.body,
            image: Image
        }, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product });
        next();
    } catch (error) {
        next(error);
    }
};


module.exports = {
    AddProductController,
    GetAllProductsController,
    DeleteProductController,
    GetProductController,
    EditProductController,
}