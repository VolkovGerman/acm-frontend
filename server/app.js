const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
if (process.env.NODE_ENV.indexOf('development') != -1) {

  const swaggerJSDoc = require('./libs/swagger');

  // serve swagger on /swagger
  app.get('/swagger', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerJSDoc);
  });

  // serve swagger ui
  app.use(express.static(path.join(__dirname, '../docs')));
}

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const options = { index: false };
app.use(express.static(path.join(__dirname, '../public/admin'), options));
app.use(express.static(path.join(__dirname, '../public/client'), options));
app.use(express.static(path.join(__dirname, '../public'), options));
app.use(express.static(path.join(__dirname, './public'), options));

app.use('/dashboard', require('./routes/dashboard'));
app.use('/api', require('./routes/api'));
app.use('/*', require('./routes/home'));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err);
});

module.exports = app;
