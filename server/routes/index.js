const userController = require('../controllers').user;
const passport = require('passport')
const api = require('express').Router()

module.exports = api
  api.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the user API!',
  }));

  api.post('/api/user/:userId/items', userController.create);
  api.get('/api/user/:userId', userController.list);
  api.put('/api/user/:userId', userController.update);
  api.delete('/api/user/:userId', userController.destroy);
};
