"use strict";

var env = process.env.NODE_ENV || 'development';
console.log('env', env);

// logging config needs appRoot
var appRoot = require("app-root-path");

var config = {
  development: {
    app: {
      bind_port: 4001,
      bind_addr: "127.0.0.1"
    },
    database: {
      host: "127.0.0.1",
      //  provide username of your database
      user: "root",
      //  provide password of your database
      password: "",
      //  name of the database
      database: "MIGRAINE_TRACKER",
      debug: false
    },
    redis: {
      secret_key: "mtrackr",
      host: "127.0.0.1",
      port: 6379
    },
    jwt: {
      secret_key: "bluetokai",
      expireTime: "10000000"
    },
    logger: {
      file: {
        level: "debug",
        filename: appRoot + "/logs/backend.log",
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false
      },
      console: {
        level: "info",
        handleExceptions: true,
        colorize: true
      }
    },
    ALLOWED_ORIGINS: ["http://localhost:3000"]
  },
  production: {}
}

exports = module.exports = config[env];
