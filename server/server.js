const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/css", function (req, res) {
  res.sendFile(path.join(__dirname, "../styles.css"));
});

app.get("/js", function (req, res) {
  res.sendFile(path.join(__dirname, "../main.js"));
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`port ${port} is running!`));
