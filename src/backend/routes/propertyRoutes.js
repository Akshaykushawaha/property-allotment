const express = require('express');
const router = express.Router();
const { showProperty } = require('../controllers/propertyController');


router.get('/all-property', showProperty);

module.exports = router;