var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/surgeon';
var db = pgp(connectionString);

// Return all available surgeon names
function getAllUsers(req, res, next) {
  db.any('select last_name from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleUser(req, res, next) {
  var uID = parseInt(req.params.user_id);
  db.one('select * from users where id = $1', uID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getAllExcercisesOfAUser(req, res, next) {
  var uID = parseInt(req.params.user_id);
  db.any(
    'select user_id, exercise_id, name as exercise_name, score \
      from score s \
      inner join exercise e on s.exercise_id = e.id \
      where s.user_id = $1', uID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all exercise scores and names for a specific user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAExcerciseOfAUser(req, res, next) {
  var uID = parseInt(req.params.user_id);
  var eID = parseInt(req.params.exercise_id);

  db.any(
    'select user_id, exercise_id, name as exercise_name, score \
      from score s \
      inner join exercise e on s.exercise_id = e.id \
      where s.user_id = $1 and s.exercise_id = $2', [uID, eID])
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved name and score for a specific user and exercise'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



module.exports = {
  getAllUsers: getAllUsers,
  getAllExcercisesOfAUser: getAllExcercisesOfAUser,
  getAExcerciseOfAUser: getAExcerciseOfAUser
};