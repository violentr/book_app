var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy

module.exports = function (db) {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function (username, password, done) {
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
  })
 );
};
