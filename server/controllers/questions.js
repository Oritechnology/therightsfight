const questions = require('../models').questions;

module.exports = {
  create(req, res) {
    return questions
      .create({
        content: req.body.content,
        userId: req.params.userId,
      })
      .then(questions => res.status(201).send(questions))
      .catch(error => res.status(400).send(error));
  },
};
