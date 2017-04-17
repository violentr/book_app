var express = require('express');
var bookRouter = express.Router();
var mysql = require('mysql');

var config = {
  user: 'root',
  password: '',
  server: 'localhost',
  database: 'books'
};

var connection = mysql.createConnection(config);
connection.connect();

var books = [];
var router = function (nav) {
  bookRouter.route('/')
    .get(function (req, res) {
      connection.query("select * from books", function (err, recordset) {
        books = recordset;
        console.log(recordset);
      });
      res.render("bookListView", {
        nav: nav,
        books: books
      });
    });

  bookRouter.route('/:id')
    .get(function (req, res) {
      var id = req.params.id
      var currentItem = id - 1
      res.render("bookView", {
        nav: nav,
        book: books[currentItem]
      });
    });
  return bookRouter;
};



module.exports = router;
