const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require:true
    }
})

// static method to sign up user
userSchema.statics.signup = async function(email, password) {

    // validate email and password
    if(!email || !password){
        throw Error('Email and password are required');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is invalid');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough');
    }

    // check if email already exists
    const exists = await this.findOne({email});

    if(exists){
        throw Error('Email already exists');
    }

    // hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hashedPassword});

    return user;
}

// static method to login user\
userSchema.statics.login = async function(email, password) {
    // validate email and password
    if(!email || !password){
        throw Error('Email and password are required');
    }

    // check if user exists
    const user = await this.findOne({email});

    if(!user){
        throw Error('Incorrect email');
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw Error('Password is incorrect');
    }

    return user;
}



module.exports = mongoose.model('User', userSchema);