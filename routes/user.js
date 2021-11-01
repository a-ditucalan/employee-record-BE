const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register',AuthController.register)
router.post('/login',AuthController.login)
router.post('/logout',AuthController.logout)
router.get('/users',AuthController.userPagination)
module.exports = router