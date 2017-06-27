// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;




var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('register');
});

router.get('/register', function(req, res) {
  res.render('register');
});




module.exports = router;
