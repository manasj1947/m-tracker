import server from './services/index';
//
// app in a separate module to facilitate unit testing
//
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redis = require("redis");
var jwt = require('jsonwebtoken');

// app config
var mtConfig = require('./config');
var redisProperties = mtConfig.redis;
var mtAllowedOrigins = mtConfig.ALLOWED_ORIGINS;

//
// create and configure app object
//

var app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '1024mb',
  extended: true
}));

// register services
server(app)

module.exports = app;