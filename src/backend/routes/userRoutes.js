const express = require('express');
const router = express.Router();
const { addUser, loginUser, showUser } = require('../controllers/userController');

router.post('/signup', addUser);
router.post('/login', loginUser);
router.get('/all-users', showUser);

module.exports = router;