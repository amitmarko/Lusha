const express = require("express");
const path = require("path");
const { getImages } = require('./Utils/api.js')
const app = express();

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get('/api/images', (req, res) => {
  getImages()
    .then(({ data }) => {
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(400)
    })
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});