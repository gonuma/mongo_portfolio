require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const mongoose = require("mongoose");
const Article = require("./model/article");


// Set up default MongoDB connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

const port = 5000;

// Get default MongoDB connection
const db = mongoose.connection;

// Bind connection to error event
db.once("open", () => {
    console.log("Connected to MongoDB database.")
})
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Fetch all articles

// Left for records, but also work but isn't async/await
// app.get("/articlelist", (req,res) => {
//     Article.find({}, (err, data) => {
//         console.log("Article from DB: ", data);
//         res.send(data);
//     })
// })

app.get("/articles", async (req, res) => {
    const articles = await Article.find({});
    // console.log("Articles from DB: ", articles);
    res.send(articles);
})

// Fetch single article
app.get("/article", async (req, res) => {
    const article = await Article.find({});
    // console.log("Selected article: ", article);
    res.send(article);
})


// Create a new article
app.post("/article", async (req, res) => {
    try {
        console.log("req.body: ", req.body);

        const newArticle = new Article ({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        });

        await Article.create(newArticle);
        res.send("Article added");

    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})