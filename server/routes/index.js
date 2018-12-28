// const configureRoutes = (app, passport) => {
const configureRoutes = (app) => {
  // Answer API requests.
  app.get('/api', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });
};

module.exports = configureRoutes;
