var express = require('express');
var app = module.exports = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var options = {
	host: 'localhost',
	port: 3306,
	user: 'session_test',
	password: 'password',
	database: 'session_test'
};

var sessionStore = new MySQLStore(options);

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));