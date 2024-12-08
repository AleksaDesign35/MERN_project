const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        //   required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // validate: {
        //    validator: (val) => {
        //       return val.length >= 6;
        //    },
        //    message: 'Password must be at least 6 characters'
        // }
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    postCode: {
        type: String,
    },
    votedFor: {
        type: Array,
    },
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
