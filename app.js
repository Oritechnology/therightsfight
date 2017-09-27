const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const firebase = require('firebase');
const port = parseInt(process.env.Port || 8080)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

// require('./server/routes')(app);
app.use('/api', require('./server/routes'))

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of Lawzi.',
}));
app.listen(port, () => {
  console.log("app running on port " + port);
})
module.exports = app;
