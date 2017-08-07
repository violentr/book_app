var express = require('express'),
adminRouter = express.Router();

var books = [{
    book_title: 'book 1',
    book_author: 'Author 1'
  },
  {
    book_title: 'book 2',
    book_author: 'Author 2'
  },
  {
    book_title: 'book 3',
    book_author: 'Author 3'
  },
  {
    book_title: 'book 4',
    book_author: 'Author 4'
  },
  {
    book_title: 'book 5',
    book_author: 'Author 5'
  }];

var router = function (nav, db) {
  var booksController = require('../controllers/booksController')(null, nav);
  adminRouter.route('/addbooks')
  .all(booksController.middleware)
    .get(function (req, res) {
      var collection = db.collection('books');
      collection.insertMany(books, function (err, results) {
        res.redirect('/books');
      });
    });
  return adminRouter;
};

module.exports = router;
