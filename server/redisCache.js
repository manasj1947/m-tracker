"use strict";

var redisProperties = require('./config').redis;

client = require("redis").createClient({
  host: redisProperties.host,
  port: redisProperties.port,
  disableTTL: true
});

exports.rediscache = client;