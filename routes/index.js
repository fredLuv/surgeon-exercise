var express = require('express');
var router = express.Router();

var db = require('../models/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userlist', db.getAllUsers);

router.get('/userlist/:user_id/exercise', db.getAllExcercisesOfAUser);

router.get('/userlist/:user_id/exercise/:exercise_id', db.getAExcerciseOfAUser);


module.exports = router;
