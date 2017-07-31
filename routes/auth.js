var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  res.json({message: 'login successful'});
});

router.post('/signup', function(req, res, next) {
  res.json({message: 'signup successful'});
});

module.exports = router;
