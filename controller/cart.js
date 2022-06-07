const Cart = require('../models/cart');

const getCart = async (req, res) => {
    try {
        const data = await Cart.find();

        return res.status(200).json({
            message: "Succesfully fetched shopping cart",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const createCart = async (req, res) => {
    try {
        const body = req.body;
        const cart = new Cart({
            ...body
        });

        const data = await cart.save();

        return res.status(200).json({
            message: "Successfully cart created",
            data
        })
    } catch (error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getCartById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await Cart.findOne({ _id: id});

        return res.status(200).json({
            message: "Successfully fetched cart based on ID",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateCart = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const data = await Cart.findOneAndUpdate({
            _id: id
        }, body, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            message: "Successfully updated cart",
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
    getCart,
    createCart,
    getCartById,
    updateCart
}