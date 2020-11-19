const express = require("express");
const router = express.Router();
const { requireSignin, authMiddleware, adminMiddleware } = require('../controllers/auth')
const { read } = require('../controllers/user')

router.get('/user', requireSignin, authMiddleware, read)
router.get('/admin', requireSignin, adminMiddleware, read)

module.exports = router;