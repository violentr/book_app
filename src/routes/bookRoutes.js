var express = require('express');
var bookRouter = express.Router();


var books = [
  {
    title: "Book 1",
    author: "Author 1"
  },
  {
    title: "Book 2",
    author: "Author 2"
  },
  {
    title: "Book 3",
    author: "Author 3"
  },
  {
    title: "Book 4",
    author: "Author 4"
  }]

var router = function (nav) {
  bookRouter.route('/')
    .get(function (req, res) {
      res.render("bookListView", {
        nav: nav,
        books: books
      });
    });

  bookRouter.route('/:id')
    .get(function (req, res) {
      var id = req.params.id
      res.render("bookView", {
        nav: nav,
        book: books[id]
      });
    });
  return bookRouter;
};



module.exports = router;
