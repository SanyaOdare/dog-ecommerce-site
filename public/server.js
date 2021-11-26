// import packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "public");

// initialize express.js
const app = express();

// middlewares
app.use(express.static(staticPath));

// routes
// home route
app.get("/", (req. res) => {
  res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get('/signup', (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
})

// 404 route
app.get('/404', (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
})


app.use((req, res) => {
  res.redirect('/404');
})

app.listen(5500, () => {
  console.log('listening on port 5500.......');
})