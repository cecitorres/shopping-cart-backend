const cloudinary = require("cloudinary").v2;

const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
        const data = await Product.find();

        return res.status(200).json({
            message: "Successfully fetched products",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        // Call to Cloudinary to upload image
        const upload = await cloudinary.uploader.upload(body.image);
        // Create a new product
        const product = new Product({
            ...body,
            image: upload.url
        });

        const data = await product.save();

        return res.status(200).json({
            message: "Successfully product created",
            data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

module.exports = {
  getProducts,
  createProduct
}
