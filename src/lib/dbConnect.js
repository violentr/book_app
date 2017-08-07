var mongoose = require('mongoose'),
url = 'mongodb://localhost:27017/booksApp',
connection = mongoose.createConnection(url);

module.exports = connection;

