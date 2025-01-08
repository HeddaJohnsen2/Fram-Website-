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
