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

module.exports = router;
