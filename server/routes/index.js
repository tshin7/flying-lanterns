const configureRoutes = (app, passport) => {
  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });
}

module.exports = configureRoutes;
