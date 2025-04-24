const express = require('express');
const router  = express.Router();

const {sendOtp} = require('../controllers/mailController');
const {handleVerifyOtp} = require('../controllers/verifyOtp');

router.post('/send-otp', sendOtp);
router.post('/user/verify', handleVerifyOtp);

module.exports =  router;