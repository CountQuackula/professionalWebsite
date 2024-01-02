var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/homepage.html'));
});

router.get('/homepage', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/homepage.html'));
});

const testVar = {
  msg : "You've got mail!",
  num : 1
};

/* GET some test variable, i think */
router.get('/testVar', function(req, res, next) {
  res.send(testVar);
});

router.get('/aboutMe', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/aboutMe.html'));
});

router.get('/projects', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/projects.html'));
});

router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

module.exports = router;
