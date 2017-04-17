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

var nav = [{
  Link: '/Books',
  Text: 'Books'
}, {
  Link: '/Authors',
  Text: 'Authors'
}]

bookRouter.route('/')
  .get(function (req, res) {
    res.render("books", {
      nav: nav,
      books: books
    });
  });

bookRouter.route('/single')
  .get(function (req, res) {
    res.send("Hello single book!");
  });

module.exports = bookRouter;
