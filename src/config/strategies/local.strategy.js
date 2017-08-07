var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  mongodb = require('mongodb').MongoClient;


module.exports = function () {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function (username, password, done) {
    var url = "mongodb://localhost:27017/booksApp";
    mongodb.connect(url, function (err, db) {
      db.collection('users')
        .findOne({
          username: username
        }, function (err, results) {
          if (results !== null && results.password === password) {
            var user = results;
            done(null, user);
          } else {
            done(null, false);
          }
        });
    });
  }));
};
