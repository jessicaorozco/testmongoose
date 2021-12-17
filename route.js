const express = require('express');
const router = express.Router();
const product = require("./controllers/product");

router.get('/products', product.product);
router.get('/faker', product.faker);
router.get('/', (req, res)=> {
        res.status(200).json('Test Mongoose');
});

module.exports = router;

