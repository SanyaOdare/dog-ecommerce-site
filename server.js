// import packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// firebase admin setup
let serviceAccount = require ("./dogecommercesite-firebase-adminsdk-fl68t-857b0c6458.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

// declare static path
let staticPath = path.join(__dirname, "public");

// initialize express.js
const app = express();

// middlewares
app.use(express.static(staticPath));
app.use(express.json());

// routes
// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
})

// signup route
app.get('/signup', (req, res) => {
  res.sendFile(join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
  let { name, email, password, number, tac, notification } = req.body;

  // form validations
  if(name.length < 3) {
    return res.json({'alert': 'name must be 3 letters long'});
  } else if (!email.length) {
    return res.json({'alert': 'enter your email'});
  } else if (password.length < 8) {
    return res.json({'alert': 'password should be 8 letters long'});
  } else if (!number.length) {
    return res.json({'alert': 'enter your phone number'});
  } else if (!Number(number) || number.length < 10) {
    return res.json({'alert': 'invalid number, please enter valid one'});
  } else if (!tac) {
    return res.json({'alert': 'you must agree to our terms and conditions'});
  }
    // store user in db
    db.collection('users').doc(email).get()
    .then(user => {
      if(user.exists) {
        return res.json({'alert': 'email already exists'});
      } else {
        // encrypt password before storing
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            req.body.password = hash;
            db.collection('users').doc(email).set(req.body)
            .then(data => {
              res.json({
                name: req.body.name,
                email: req.body.email,
                seller: req.body.seller,
              })
            })
          })
        })
      }
    })    
})

// 404 route
app.get('/404', (req, res) => {
  res.sendFile(join(staticPath, "404.html"));
})


app.use((req, res) => {
  res.redirect('/404');
})

app.listen(5500, () => {
  console.log('listening on port 5500.......');
});