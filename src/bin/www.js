#!/usr/bin/env node

// bin/www.js
/**
 * Module dependencies.
 */
import app from '../app';
import debugLib from 'debug';
import https from 'https';
import http from 'http';
import config from '../config/env';
import fs from 'fs';
import env from '../config/env';
import models from '../core/loadModels';

const debug = debugLib('express-es6:server');
// generated code below.

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(config.port);
app.set('port', port);

/**
 * Create HTTP server.
 */

// var server = https.createServer(app);
// we will pass our 'app' to 'https' server
let server;
if (env.sslCert && env.sslKey) {
  server = https.createServer({
    key: fs.readFileSync(env.sslKey),
    cert: fs.readFileSync(env.sslCert)
  }, app);
} else {
  server = http.createServer(app);
}

/**
 * Listen on provided port, on all network interfaces.
 */

models.waterline.initialize(models.config, function (err, models) {
  if (err) throw err;
  global.Models = app.models = models.collections;
  app.connections = models.connections;

  // Start Server
  server.listen(port);
});

//server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
  console.info(`the server running on ${config.port}`);
  console.info(`the server ENV Vars `, config);
}