'use strict'

const userController = require('../controllers').user;
const questionsController = require('../controllers').questions;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the User API!',
  }));

  app.post('/api/user', userController.create);
  app.get('/api/user', userController.list);
  app.get('/api/user/:userId', userController.retrieve);
  app.put('/api/user/:userId', userController.update);
  app.delete('/api/user/:userId', userController.destroy);

  app.post('/api/user/:userId/items', questionsController.create);
  app.put('/api/user/:userId/items/:questionsId', questionsController.update);
  app.delete(
    '/api/user/:userId/items/:questionsId', questionsController.destroy
  );
  app.all('/api/user/:userId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};
