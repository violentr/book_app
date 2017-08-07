var express = require('express');
var bookRouter = express.Router();
var objectId = require('mongodb').ObjectID;

var router = function (nav, db) {
  bookRouter.use(function (req, res, next) {
    if (!req.user){
      res.redirect('/');
    }else{
      next();
    }
    });
    bookRouter.route('/')
    .get(function (req, res) {
      var collection = db.collection('books');
      collection.find().toArray(
        function (err, results) {
          console.log(results);
          res.render('bookListView', {
            nav: nav,
            books: results
          });
        });
    });

    bookRouter.route('/:id')
    .get(function (req, res) {
      var id = new objectId(req.params.id);
      var collection = db.collection('books');
      collection.findOne({
        _id: id
      },
      function (err, results) {
        res.render('bookView', {
          nav: nav,
          book: results
        });

      }
                        );
    });
    return bookRouter;
};

module.exports = router;
