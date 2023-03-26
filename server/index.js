require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require("./model/article");
const request = require("request");
const path = require("path");
let https = require("https");
let fs = require("fs");
//import fetch from "node-fetch@2";
const fetch = require("node-fetch");

//app.use(express.static(path.join(__dirname, "../build")));

// Import SSL certs
let certs = {
	key: fs.readFileSync(path.join(__dirname, "../.keys/privkey.pem")),
	cert: fs.readFileSync(path.join(__dirname, "../.keys/fullchain.pem"))
}

// Initialize HTTPS server
let server = https.createServer(certs, app);

//CORS Settings

const corsConfig = {
 origin: '*',
 credentials: true,
 methods: ['GET', 'POST'],
 allowedHeaders: ['Content-Type']
}
//app.use(cors());
//app.use(function (req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//  res.header("Access-Control-Allow-Headers", "Content-Type");
//  res.header("Access-Control-Allow-Credentials", true);
//  next();
//});
app.use(cors(corsConfig));
app.use(express.json());

const port = 5000;

// Set up default MongoDB connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get default MongoDB connection
const db = mongoose.connection;

// Bind connection to error event
db.once("open", () => {
  console.log("Connected to MongoDB database.");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Fetch all articles
app.get("/articles", cors(), async (req, res) => {
  const articles = await Article.find({});
  // console.log("Articles from DB: ", articles);
  res.send(articles);
});

// Fetch single article
app.get("/article", async (req, res) => {
  const article = await Article.find({});
  // console.log("Selected article: ", article);
  res.send(article);
});

// Create a new article
app.post("/article", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const newArticle = new Article({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
    });

    await Article.create(newArticle);
    res.send("Article added");
  } catch (err) {
    console.log(err);
  }
});

// Generate Access Token
app.get("/refresh", async (req, res) => {
  let parameters = {
    body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + process.env.SPOTIFY_ID_SECRET_64,
    },
  };

  fetch("https://accounts.spotify.com/api/token", parameters)
    .then((response) => response.json())
    .then((data) => res.send(data));
});

server.listen(port,() => {
  console.log(`Server is running on port ${port}`);
});
