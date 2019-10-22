'use strict';

var config = require('./config.js');
var AuthDbProperties = config.database;
var mysql = require('mysql2');

var authPool = mysql.createPool({
  host: AuthDbProperties.host,
  user: AuthDbProperties.user,
  password: AuthDbProperties.password,
  database: AuthDbProperties.database,
  debug: AuthDbProperties.debug
});

exports.authPool = authPool;