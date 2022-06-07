const express = require('express');
const router = express.Router();
const { getCart, createCart, getCartById, updateCart, validateCoupon } = require('../controller/cart');

router.get('/', getCart);

router.get('/:id', getCartById);

router.post('/', createCart);

router.put('/:id', updateCart);

router.post('/coupon', validateCoupon);

module.exports = router;