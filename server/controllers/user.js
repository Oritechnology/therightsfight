// const {users, questions}  = require('../models');
const questions = require('../models').questions
const firebase = require('../../firebase')
  console.log(firebase);

module.exports = {
  create(req, res) {
    const {email, password} = req.body
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("USER", user)
      return res.status(200).json(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      return res.status(400).send(errorMessage)
    });
  },

  list(req, res) {
  return User
    .findAll({
      include: [{
        model: Questions,
        as: 'questions',
      }],
      order: [
        ['createdAt', 'DESC'],
        [{ model: Questions, as: 'questions'}, 'createdAt', 'ASC'],
      ],
    })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error));
},

retrieve(req, res) {
  return User
    .findById(req.params.userId, {
      include: [{
        model: Questions,
        as: 'questions',
      }],
    })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return res.status(200).send(user);
    })
    .catch(error => res.status(400).send(error));
},

update(req, res) {
  return User
    .findById(req.params.userId, {
      include: [{
        model: Questions,
        as: 'questions',
      }],
    })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      return user
        .update({
          title: req.body.title || user.title,
        })
        .then(() => res.status(200).send(user))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},

destroy(req, res) {
  return User
    .findById(req.params.userId)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return User
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},


};
