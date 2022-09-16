const mongoose = require('mongoose');
//const { SchemaTypes } = require("mongoose");

const articleSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String,
    username: String,
    createdDate: Date
});


const Article = mongoose.model("Article",articleSchema);

module.exports = Article;