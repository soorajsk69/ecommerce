const express = require('express');
const router = express.Router();
const product = require('../models/productModel');

// GET all products
router.get('/getallproducts', async (req, res) => {
  try {
    const products = await product.find({});
    res.send(products);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await product.deleteOne(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
