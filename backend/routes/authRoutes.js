const express = require('express');
const { registerLibrarian, loginLibrarian, logoutLibrarian } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerLibrarian);
router.post('/login', loginLibrarian);
router.post('/logout', logoutLibrarian);

module.exports = router;
