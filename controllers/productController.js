const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product({ name, description, price, owner: req.user.id });
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProductsByUser = async (req, res) => {
    try {
        const products = await Product.find({ owner: req.user.id });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
