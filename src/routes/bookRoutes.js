var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {
var booksController = require('../controllers/booksController')(null, nav);
  bookRouter.use(booksController.middleware);
    bookRouter.route('/')
    .get(booksController.getIndex);

    bookRouter.route('/:id')
    .get(booksController.getById);
    return bookRouter;
};

module.exports = router;
