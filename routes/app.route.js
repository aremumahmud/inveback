const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const registerController = require('../controller/register.controller')
const loginController = require('../controller/login.controller')
const getUserDataController = require('../controller/getUserData.controller')
const otpController = require('../controller/otp.controller')
const PaymentController = require('../controller/payment')
const { getUserController, lockUser, addfunds } = require('../controller/getUsers')
const router = express.Router()


router
    .route('/register')
    .post(registerController)


router
    .route('/login')
    .post(loginController)


router
    .route("/getUserData")
    .post(authMiddleware, getUserDataController)

router
    .route('/otp-send')
    .post(otpController.otpSendController)

router
    .route('/otp-verify')
    .post(otpController.otpVerifyController)

router
    .route('/otp-change-password')
    .post(otpController.otpChangePassword)


router
    .route('/make_payment')
    .post(authMiddleware, PaymentController)

router
    .route('/get_user')
    .post(getUserController)

router
    .route('/lock_user')
    .post(lockUser)


router
    .route('/add_funds')
    .post(addfunds)

module.exports = router