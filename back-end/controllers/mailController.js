const nodemailer = require('nodemailer');
const Otp        = require('../models/otpSchema');


const sendOtp = async (req,res) => {
    const {email} = req.body;

    const existingOtp = await Otp.findOne({email});

    if (existingOtp) {
        // If OTP exists, check if it has expired or not
        const currentTime = new Date();
        const expirationTime = new Date(existingOtp.createdAt);
        expirationTime.setMinutes(expirationTime.getMinutes() + 5); // OTP expiration time

        if (currentTime < expirationTime) {
            return res.status(400).json({ message: 'An OTP has already been sent. Please check your email.' });
        }
        
        // If the OTP has expired, proceed with sending a new one
        await Otp.deleteOne({ email });
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

    // save to db
    await Otp.create({email, otp: generatedOtp});

    // send email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,           
        secure: true,  
        auth: {
            user: process.env.MAIL,
            pass: process.env.MAIL_PASS,
        }
    });

    const mailOptions = {
        from: "Salon-X team",
        to: email,
        subject: "OTP code for verification",
        text: `This is your otp ${generatedOtp}. Do not share it with anyone.`,
    };


    try{
        transporter.sendMail(mailOptions);
        res.status(200).json({message: 'Otp sent successfully'});
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send OTP" });
    }
};




module.exports = {sendOtp};