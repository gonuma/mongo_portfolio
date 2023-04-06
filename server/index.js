require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require("./model/article");
const request = require("request");
const axios = require("axios");
const path = require("path");
let https = require("https");
let fs = require("fs");
const fetch = require("node-fetch");
const cronJob = require("node-cron");
const Activity = require("./model/activity");

//app.use(express.static(path.join(__dirname, "../build")));

// Import SSL certs
// let certs = {
//   key: fs.readFileSync(path.join(__dirname, "../.keys/privkey.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "../.keys/fullchain.pem")),
// };

// Initialize HTTPS server
// let server = https.createServer(certs, app);

// CORS Settings
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// Previous attempt at CORS. Reduntant with above, correct?
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

// Fetch all articles from the database
app.get("/articles", cors(), async (req, res) => {
  const articles = await Article.find({});
  // console.log("Articles from DB: ", articles);
  res.send(articles);
});

// Fetch single article from the database
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

// Fetch all activities from database
app.get("/activities", cors(), async (req, res) => {
  const activities = await Activity.find({});
  // console.log("Activities from DB: ", activities);
  res.send(activities);
});

// Generate Spotify Access Token
// Should I refactor this to save the token to the database, then replace the token based on a Cronjob?
app.get("/spotify-refresh", async (req, res) => {
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

// Generate Strava Access Token & Update Activities

// app.get("/strava-refresh", async (req, res) => {
//   axios
//     .post("https://www.strava.com/api/v3/oauth/token", {
//       client_id: `${process.env.STRAVA_CLIENT_ID}`,
//       client_secret: `${process.env.STRAVA_CLIENT_SECRET}`,
//       grant_type: `refresh_token`,
//       refresh_token: `${process.env.STRAVA_REFRESH_TOKEN}`,
//     })
//     .then((response) => {
//       // console.log(response);
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// Update activities in Database Every Day
const updateActivities = cronJob.schedule("0 0 * * *", () => {
  axios
    .post("https://www.strava.com/api/v3/oauth/token", {
      client_id: `${process.env.STRAVA_CLIENT_ID}`,
      client_secret: `${process.env.STRAVA_CLIENT_SECRET}`,
      grant_type: `refresh_token`,
      refresh_token: `${process.env.STRAVA_REFRESH_TOKEN}`,
    })
    .then((res) => {
      fetch(`https://www.strava.com/api/v3/athlete/activities?per_page=200`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + res.data.access_token,
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then(async (res) => {
          const activities = await Activity.find({}, { _id: 0 });
          // console.log("All Activites: ", activities);
          res.map((activity) => {
            if (!activities.find((item) => item.activityID === activity.id)) {
              const newActivity = new Activity({
                achievements: activity.achievement_count,
                averageSpeed: activity.average_speed,
                averageHeartRate: activity.average_heartrate,
                type: activity.type,
                distance: activity.distance,
                activityID: activity.id,
                startDate: activity.start_date_local,
              });
              Activity.create(newActivity);
              console.log("New activity found and registered.");
              console.log(activity);
            }
            // else {
            //   console.log("Activity Found");
            // }
          });
        });
    });
});

updateActivities.start();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log(`Running in ${process.env.NODE_ENV} environment`);
});
