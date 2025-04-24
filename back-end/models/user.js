const mongoose = require('mongoose');

// creating schema or defining structure
const userSchema = new mongoose.Schema({


    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['client', 'stylist','salon'],
        default: 'client',
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'role' 
    }
}, {timestamps: true} );

// creating model
const User = mongoose.model('User', userSchema);

module.exports = User;
