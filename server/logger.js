'use strict';

//
// configure logging
//
// see https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications
//
var _require = require('winston'),
  createLogger = _require.createLogger,
  format = _require.format,
  transports = _require.transports;

var combine = format.combine,
  timestamp = format.timestamp,
  json = format.json;

// get logging options from config.js

var options = require('./config').logger;

// instantiate a new Winston Logger with the settings defined above
var logger = createLogger({
  format: combine(timestamp(), json()),
  transports: [new transports.File(options.file), new transports.Console(options.console)],
  exitOnError: false // do not exit on handled exceptions
});

module.exports = logger;