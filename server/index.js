require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const https = require("https");
const cronJob = require("node-cron");

const Article = require("./model/article");
const Activity = require("./model/activity");
const Badge = require("./model/badge");

const app = express();
const port = 5000;

// Middleware
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsConfig));
app.use(express.json());

// SSL certs
const certs = {
  key: fs.readFileSync(path.join(__dirname, "../.keys/privkey.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../.keys/fullchain.pem")),
};
const server = https.createServer(certs, app);

// MongoDB setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => console.log("Connected to MongoDB database."))
  .on("error", (error) => console.error("MongoDB connection error:", error));

// Routes
app.get("/articles", async (req, res) => {
  res.send(await Article.find({}));
});

app.get("/article", async (req, res) => {
  res.send(await Article.find({}));
});

app.post("/article", async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.send("Article added");
  } catch (err) {
    console.log(err);
  }
});

app.get("/badges", async (req, res) => {
  res.send(await Badge.find({}));
});

app.get("/activities", async (req, res) => {
  res.send(await Activity.find({}));
});

app.get("/spotify-refresh", async (req, res) => {
  const { data } = await axios.post("https://accounts.spotify.com/api/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + process.env.SPOTIFY_ID_SECRET_64,
    },
    body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
  });
  res.send(data);
});

app.get("/games", async (req, res) => {
  const gameData = await getSteamGameData();
  res.send(gameData);
});

const getSteamGameData = async () => {
  try {
    const { data: steamData } = await axios.get(
      `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&count=7&format=json`
    );

    const gameDetails = await Promise.all(
      steamData.response.games.map(async (game) => {
        const { data: html } = await axios.get(
          `https://store.steampowered.com/app/${game.appid}`
        );
        const $ = cheerio.load(html);
        return {
          appid: game.appid,
          name: game.name,
          img_icon_url: game.img_icon_url,
          description: $(".game_description_snippet").text().trim(),
        };
      })
    );

    return gameDetails;
  } catch (error) {
    console.error("Error fetching Steam game data:", error);
    return [];
  }
};

const scrapeAndUpdateBadges = async () => {
  try {
    const { data: html } = await axios.get(
      "https://tryhackme.com/p/fallabrine"
    );
    const $ = cheerio.load(html);
    const badgesFromDB = await Badge.find({}, { _id: 0 });

    $(".badge-achieved").each(async (index, element) => {
      const badge = {
        name: $(".m-0.faded").eq(index).text().trim(),
        description: $(".size-18.bold").eq(index).text().trim(),
        img_icon_url: $(".badge-image").eq(index).attr("src"),
      };

      if (!badgesFromDB.find((item) => item.name === badge.name)) {
        await Badge.create(badge);
        console.log("New badge found and saved:", badge.name);
      }
    });
  } catch (error) {
    console.error("Error updating badges:", error);
  }
};

// app.get("/games", async (req, res) => {
//   const { data: steamData } = await axios.get(
//     `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&count=7&format=json`
//   );

//   const gamePromises = steamData.response.games.map(async (game) => {
//     const { data: html } = await axios.get(
//       `https://store.steampowered.com/app/${game.appid}`
//     );
//     const $ = cheerio.load(html);
//     return {
//       appid: game.appid,
//       name: game.name,
//       img_icon_url: game.img_icon_url,
//       description: $(".game_description_snippet").text(),
//     };
//   });

//   const finalData = await Promise.all(gamePromises);
//   res.send(finalData);
// });

// Scrape TryHackMe & Update badge database every Sunday at Midnight
// const updateBadges = cronJob.schedule("0 0 * * 0", async () => {
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
const updateBadges = cronJob.schedule("0 0 * * 0", scrapeAndUpdateBadges);

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

updateBadges.start();

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
              // console.log("Data compiled");
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
