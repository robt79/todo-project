// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt-as-promised')
//
// /* GET users listing. */
// router.post('/', (req, res, next) => {
//   bcrypt.hash(req.body.password, 10)
//     .then((hashed_password) => {
//       console.log(req.body.email, hashed_password);
//       res.send(hashed_password);
//     })
//     .catch((err) => {
//       console.log(err);
//       next(err);
//     });
// });
'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users')
        .insert({
          email: req.body.email,
          hashed_password: hashed_password
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      req.session.user_id = user.id;
      res.redirect('/todo');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/', (req, res, next) => {
  return knex('users')
    .then((users) => {
      res.send(users);
    })
});


router.get('/logout', (req, res) => {
  req.session.user_id = null;
  res.redirect('/');
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.

// router.get('/', (req, res, next) => {
//   console.log('root');
//   res.render('login');
// });
//
//
//
// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }









module.exports = router;
