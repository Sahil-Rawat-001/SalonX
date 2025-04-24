const User = require('../models/user');
const bcrypt = require('bcrypt');


const signupUser = async (req,res) => {

    try{
        const {firstName,lastName,email,phone,password,role,roleId} = req.body;

        // check if user exist or not
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({ message: 'user already registered' });
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // create new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            role,
            roleId
        });
        // save user to database
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'user created successfully', savedUser });
    } catch(error){
        console.log(`Signup error: ${error}`);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
 
module.exports ={ signupUser};