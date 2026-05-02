const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getOutOfStockProducts
} = require('../controllers/productController');

const validateProduct = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 1, max: 100 })
        .withMessage('Title must be between 1 and 100 characters'),
    body('price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat({ min: 0 })
        .withMessage('Price must be a number and cannot be negative'),
    body('stock')
        .notEmpty()
        .withMessage('Stock is required')
        .isInt({ min: 0 })
        .withMessage('Stock must be an integer and cannot be negative')
];

const validateProductUpdate = [
    body('title')
        .optional()
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage('Title must be between 1 and 100 characters'),
    body('price')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Price must be a number and cannot be negative'),
    body('stock')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Stock must be an integer and cannot be negative')
];

router.post('/products', validateProduct, createProduct);
router.get('/products/out-of-stock', getOutOfStockProducts);
router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', validateProductUpdate, updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
