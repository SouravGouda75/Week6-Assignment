const express = require('express');
const router = express.Router();
const { createProduct, getProductsByUser } = require('../controllers/productController');
const auth = require('../middlewares/auth');

router.post('/', auth, createProduct);
router.get('/user', auth, getProductsByUser);

module.exports = router;
