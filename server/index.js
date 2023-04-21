require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require("./model/article");
const Activity = require("./model/activity");
const Badge = require("./model/badge");
const request = require("request");
const requestPromise = require("request-promise");
const cheerio = require("cheerio");
const puppet = require("puppeteer");
const axios = require("axios");
const path = require("path");
const https = require("https");
const fs = require("fs");
const activity_log = fs.createWriteStream(
  __dirname + "/../logs/activities.log",
  { flags: "w" }
);
const log_stdout = process.stdout;
const util = require("util");
const fetch = require("node-fetch");
const cronJob = require("node-cron");
const {
  Scraper,
  Root,
  DownloadContent,
  OpenLinks,
  CollectContent,
} = require("nodejs-web-scraper");
const { default: puppeteer } = require("puppeteer");

//app.use(express.static(path.join(__dirname, "../build")));

// Import SSL certs
let certs = {
  key: fs.readFileSync(path.join(__dirname, "../.keys/privkey.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../.keys/fullchain.pem")),
};

// Initialize HTTPS server
let server = https.createServer(certs, app);

// CORS Settings
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

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

// Fetch all badges from database
app.get("/badges", cors(), async (req, res) => {
  const badges = await Badge.find({});
  // console.log("Badges from DB: ", badges);
  res.send(badges);
});

// Scrape badge info from TryHackMe & Update database
// app.get("/badges", async (req, res) => {
//   const url = "https://tryhackme.com/p/fallabrine";

//   async function getPage(url) {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: "networkidle0" });

//     const html = await page.content();
//     await browser.close();
//     return html;
//   }

//   const html = await getPage(url);
//   const $ = cheerio.load(html);
//   const badges = await Badge.find({}, { _id: 0 });

//   $(".badge-achieved").each((index, element) => {
//     const badge = {
//       name: $(".m-0.faded").eq(index).text(),
//       description: $(".size-18.bold").eq(index).text(),
//       img_icon_url: $(".badge-image").eq(index).attr("src"),
//     };
//     if (!badges.find((item) => item.name === badge.name)) {
//       const newBadge = new Badge(badge);
//       Badge.create(newBadge);
//       console.log("New badge found: " + newBadge);
//       // console.log();
//     }
//   });
// });

// Scrape TryHackMe & Update badge database every Sunday at Midnight
const updateBadges = cronJob.schedule("0 0 * * 0", async () => {
  const url = "https://tryhackme.com/p/fallabrine";

  async function getPage(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    const html = await page.content();
    await browser.close();
    return html;
  }

  const html = await getPage(url);
  const $ = cheerio.load(html);
  const badges = await Badge.find({}, { _id: 0 });

  $(".badge-achieved").each((index, element) => {
    const badge = {
      name: $(".m-0.faded").eq(index).text(),
      description: $(".size-18.bold").eq(index).text(),
      img_icon_url: $(".badge-image").eq(index).attr("src"),
    };
    if (!badges.find((item) => item.name === badge.name)) {
      const newBadge = new Badge(badge);
      Badge.create(newBadge);
      console.log("New badge found: " + newBadge);
      // console.log();
    }
  });
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

// Update activities in Database Every Sunday, Tuesday, Thursday at Midnight
const updateActivities = cronJob.schedule("0 0 * * 0,2,4", () => {
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
              activity_log.write(util.format(activity) + "\n");
              log_stdout.write(util.format(activity) + "\n");
            }
            // else {
            //   console.log("Activity Found");
            // }
          });
        });
    });
});

updateActivities.start();

// Pull recently played Steam Games & scrape for descriptions
app.get("/games", async (req, res) => {
  await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&count=7&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      let finalData = [];

      data.response.games.forEach((game) => {
        requestPromise(`https://store.steampowered.com/app/${game.appid}`).then(
          (html) => {
            let $ = cheerio.load(html);
            finalData.push({
              appid: game.appid,
              name: game.name,
              img_icon_url: game.img_icon_url,
              description: $(".game_description_snippet").text(),
            });

            data.response.games.shift();
            if (data.response.games.length <= 0) {
              console.log("Data compiled");
              res.send(finalData);
            }
          }
        );
      });
    });
});

// Uncomment for production
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Uncomment for development
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
