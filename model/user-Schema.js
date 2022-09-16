const mongoose = require('mongoose');
const { SchemaTypes } = require("mongoose");

const userSchema = new mongoose.Schema({
    'name':{type: SchemaTypes.String, required: [true, 'Please enter a name']},
    'username':{type: SchemaTypes.String, required: [true, 'Please enter a username'], unique:true},
    'password':{type:SchemaTypes.String, required: [true, 'Please enter a password']}
    
});

const UserModel = new mongoose.model("User",userSchema);

module.exports = UserModel