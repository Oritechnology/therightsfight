'use strict'

const userController = require('../controllers').user;
const questionsController = require('../controllers').questions;

module.exports = require('express').Router()
  .get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the User API!',
  }))

  .post('/users', userController.create)
  .get('/users', userController.list)
  .get('/users/:userId', userController.retrieve)
  .put('/users/:userId', userController.update)
  .delete('/users/:userId', userController.destroy)
  .post('/users/:userId/items', questionsController.create)
  // .put('/user/:userId/items/:questionsId', questionsController.update)
  // .delete(
  //   '/user/:userId/items/:questionsId', questionsController.destroy
  // )
  .all('/user/:userId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }))
