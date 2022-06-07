const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;