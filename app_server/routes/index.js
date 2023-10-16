var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'SignIn' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/review2', function(req, res, next) {
  res.render('review2', { title: 'Review Site' });
});
router.get('/review', function(req, res, next) {
  res.render('review', { title: 'Review Course' });
});
router.get('/dope', function(req, res, next) {
  res.render('dope', { title: 'Course' });
});
module.exports = router;