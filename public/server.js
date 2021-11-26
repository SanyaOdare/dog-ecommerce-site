// import packages
import express, { static, json } from 'express';
import { initializeApp, credential as _credential, firestore } from 'firebase-admin';
import { genSalt, hash as _hash } from 'bcrypt';
import { join } from 'path';

// firebase admin setup
import serviceAccount from "./dogecommercesite-firebase-adminsdk-fl68t-857b0c6458.json";

initializeApp({
  credential: _credential.cert(serviceAccount)
});

let db = firestore();

// declare static path
let staticPath = join(__dirname, "public");

// initialize express.js
const app = express();

// middlewares
app.use(static(staticPath));
app.use(json());

// routes
// home route
app.get("/", (req. res) => {
  res.sendFile(join(staticPath, "index.html"));
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
        genSalt(10, (err, salt) => {
          _hash(password, salt, (err, hash) => {
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
  
    res.json('data received');
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
})