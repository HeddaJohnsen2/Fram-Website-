// to make it easier to start up the website i wanted to use a server with express.js
//source: https://javascript.plainenglish.io/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407
//https://expressjs.com/en/starter/static-files.html

const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "index.html"));
});

app.get("/produce", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "produce.html"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "chat.html"));
});

app.listen(PORT, () => {
  console.log(`Serveren kjører på http://localhost:${PORT}`);
});
