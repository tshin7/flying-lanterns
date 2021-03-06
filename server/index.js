const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const passport = require('passport');
const configureServer = require('./server');
const configureRoutes = require('./routes');
const SERVER_CONFIGS = require('./constants/server');

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });
} else {
  const app = express();

  configureServer(app, passport);
  configureRoutes(app, passport);

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.listen(SERVER_CONFIGS.PORT, (error) => {
    if (error) throw error;
    console.error(`Node cluster worker ${process.pid}: listening on port ${SERVER_CONFIGS.PORT}`);
  });
}
