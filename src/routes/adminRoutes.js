var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

var router = function (nav) {
  adminRouter.route('/addBooks')
    .get(function (req, res) {
      var url = 'mongodb://localhost:27017/booksApp';
      mongodb.connect(url, function (err, db) {
        var collection = db.collection('books');
        collection.insertMany(books, function (err, results) {
          res.send(results);
          db.close();
        });
      });
    });
  return adminRouter;
};

module.exports = router;
