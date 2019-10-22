//
// launch app in a server
//

// app config
import 'dotenv/config';

var blueTokaiConfig = require('./config');
var btcAllowedOrigins = blueTokaiConfig.ALLOWED_ORIGINS;

// app object
const app = require('./app');

var logger = require('./logger');

//
// Start the server
//

var bindport = blueTokaiConfig.app.bind_port;
var bindaddr = blueTokaiConfig.app.bind_addr;

app.listen(bindport, bindaddr, function () {
  logger.info('Welcome to the blue tokai Backend');
  logger.info('  Listening on ' + bindaddr + ':' + bindport);
  logger.info("  Allowed Origins: " + JSON.stringify(btcAllowedOrigins));
});

module.exports = app;