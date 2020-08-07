"use strict";
var express = require('express');
require('dotenv').config();
var app = express();
var port = process.env.APP_PORT || 3001;
// Parsers
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// CORS
var cors = require('cors');
var corsOptions = {
    origin: '*',
    credentials: true,
};
app.use(cors(corsOptions));
// DB
var mongoose = require('mongoose');
mongoose.connect(process.env.APP_DB_URI, { useNewUrlParser: true });
var db = mongoose.connection;
// eslint-disable-next-line no-console
db.once('open', function () { return console.log('Mongoose - Connected!'); });
// Router
var router = require('./router');
// Routes
app.use('/api', router);
// eslint-disable-next-line no-console
app.listen(port, function () { return console.log("Server listening on port " + port); });
