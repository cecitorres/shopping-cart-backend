const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    products: {
        type: Array,
        required: true
    },
    shipping: {
        type: String
    },
    coupon: {
        type: String
    }
    // payment: {
    //     type: mongoose.SchemaTypes.ObjectId
    // },
}, {
    timestamps: true
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;