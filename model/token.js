const mongoose = require('mongoose');
const { SchemaTypes } = require("mongoose");

const tokenSchema = new mongoose.Schema({
    'token':{type: SchemaTypes.String, required: true}
});

const token = new mongoose.model("token",tokenSchema);

module.exports = token;