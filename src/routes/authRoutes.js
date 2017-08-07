var express = require('express'),
  authRouter = express.Router(),
  passport = require('passport');


var router = function (db) {
  authRouter.route('/signup')
    .post(function (req, res) {
      console.log(req.body);
      var collection = db.collection('users');
      var user = {
        username: req.body.username,
        password: req.body.password
      };
      collection.insert(user, function (err, results) {
        req.login(results.ops[0], function () {
          res.redirect('/auth/profile');
        });
      });
    });
  authRouter.route('/signin')
    .post(passport.authenticate('local', {
      failureRedirect: '/'
    }), function (req, res) {
      res.redirect('/auth/profile');
    });
  authRouter.route('/profile')
      .all(function(req, res, next){
        if (!req.user){
          res.redirect('/');
        }else{
         next();
        }
      })
    .get(function (req, res) {
      res.redirect('/books');
    });
  return authRouter;
};

module.exports = router;
