var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login')
});

router.post('/login', function(req, res, next) {
  console.log('Req body', req.body);
  return knex('users')
    .where({
      email: req.body.email
    })
    .then((users) => {
      let user = users[0];
      bcrypt.compare(req.body.password, user.hashed_password)
        .then((valid) => {
          if (valid === true) {
            req.session.user_id = user.id;
            res.redirect('/todo')
          } else {
            res.send('try again');
          }

        })
        .catch((err) => {
          next(err);
        });
    })
});

router.get('/register', (req, res) => {
  res.render('register');
});

module.exports = router;
