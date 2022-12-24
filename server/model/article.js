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
    }
})

const Article = mongoose.model("article", articleSchema);

module.exports = Article;