var objectId = require('mongodb').ObjectID,
  db = require('../lib/dbConnect'),

booksController = function(bookService, nav){
  var middleware = function (req, res, next) {
    if (!req.user){
      res.redirect('/');
    }else{
      next();
    }
    },
  getIndex = function (req, res) {
      var collection = db.collection('books');
      collection.find().toArray(
        function (err, results) {
          console.log(results);
          res.render('bookListView', {
            nav: nav,
            books: results
          });
        });
  },
 getById = function (req, res) {
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
    }
  return {
    getIndex: getIndex,
    getById: getById,
    middleware: middleware
  };
};
module.exports = booksController;
