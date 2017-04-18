var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function (nav, db) {
  bookRouter.route('/')
    .get(function (req, res) {
      var url = 'mongodb://localhost:27017/booksApp';
      mongodb.connect(url, function (err, db) {
        var collection = db.collection('books');
        collection.find().toArray(
          function (err, results) {
            console.log(results);
            res.render('bookListView', {
              nav: nav,
              books: results
            });
          });
        db.close();
      });
    });

  bookRouter.route('/:id')
    .get(function (req, res) {
      var id = req.params.id;
      db.query('select * from books where book_id=?', id, function (err, recordset) {
        if (recordset.length === 0) {
          res.status(404).send('Book Not Found!');
        } else {
          res.render('bookView', {
            nav: nav,
            book: recordset[0]
          });
        }

      });
    });
  return bookRouter;
};

module.exports = router;
