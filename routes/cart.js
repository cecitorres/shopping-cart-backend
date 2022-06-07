const express = require('express');
const router = express.Router();
const { getCart, createCart, getCartById, updateCart } = require('../controller/cart');

router.get('/', getCart);

router.get('/:id', getCartById);

router.post('/', createCart);

router.put('/:id', updateCart);

// router.delete('/:id', deleteTodo);

module.exports = router;