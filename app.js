var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var db = require('./src/lib/dbConnect');

var nav = [{
  Link: '/Books',
  Text: 'Books'
}, {
  Link: '/Authors',
  Text: 'Authors'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav, db);

var adminRouter = require('./src/routes/adminRoutes')(nav);

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({
  extname: '.hbs'
}));
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', '.hbs');
app.set('view engine', '.jade');
app.set('view engine', 'ejs');



app.get('/', function (req, res) {
  res.render('index', {
    title: "hello from title",
    nav: nav
  });
});

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.listen(port, function (err) {
  console.log('running server on port', port);
});
