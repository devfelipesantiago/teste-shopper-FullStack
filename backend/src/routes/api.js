const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/products', productController.getProducts);
router.post('/uploads', upload.single('table'), productController.uploadFile);
router.post('/update', productController.updatePrices);

module.exports = router;
