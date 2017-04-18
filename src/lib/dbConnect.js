var mysql = require('mysql');

var config = {
  user: 'root',
  password: '',
  server: 'localhost',
  database: 'books'
};

module.exports = mysql.createConnection(config);
