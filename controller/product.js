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
        const product = new Product({
            ...body
        });

        const data = await product.save();

        return res.status(200).json({
            message: "Successfully product created",
            data
        })
    } catch (error) {
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
