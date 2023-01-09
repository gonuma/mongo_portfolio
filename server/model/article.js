const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    body: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: String,
        require: true,
        unique: false
    }
})

const Article = mongoose.model("article", articleSchema);

module.exports = Article;