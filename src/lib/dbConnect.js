var mongodb = require('mongodb').MongoClient,
  url = 'mongodb://localhost:27017/booksApp';

module.exports = mongodb.connect(url);
