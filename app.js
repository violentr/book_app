var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bookRouter = express.Router();
var nav = [{
  Link: '/Books',
  Text: 'Books'
}, {
  Link: '/Authors',
  Text: 'Authors'
}]

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
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({
  extname: '.hbs'
}));
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', '.hbs');
app.set('view engine', '.jade');
app.set('view engine', 'ejs');


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

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
  res.render('index', {
    title: "hello from title",
    nav: nav
  });
});

app.listen(port, function (err) {
  console.log('running server on port', port);
});
