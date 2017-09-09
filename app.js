const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport')
const cors = require('cors')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes')(app);
app.use('/api', require('./server/routes'))

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of Lawzi.',
}));

module.exports = app;
