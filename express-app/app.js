var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./routes/router.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'))); // contenuti direttamenti referenziati dal file html
app.use(express.static(path.join(__dirname, 'src'))); // contenuti svelte esportati dal bundler di vite

// Serve API requests from the router
app.use('/api', router);

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

module.exports = app;
