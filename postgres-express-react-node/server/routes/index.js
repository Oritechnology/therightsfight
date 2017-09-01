const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the user API!',
  }));

  app.post('/api/user/:userId/items', userController.create);
  app.get('/api/user/:userId', userController.list);
  app.put('/api/user/:userId', userController.update);
  app.delete('/api/user/:userId', userController.destroy);
};
