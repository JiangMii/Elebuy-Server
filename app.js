var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var attrRouter = require('./routes/attribute');
var usersRouter = require('./routes/users');
var loginRouter=require('./routes/login');
var rolesRouter=require('./routes/roles');
var goodsRouter=require('./routes/goods')
var categoryRouter=require('./routes/category');
var orderRouter=require('./routes/order');
var reportRouter=require('./routes/report');
var perRouter=require('./routes/permission');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/roles',rolesRouter);
app.use('/categories',attrRouter);
app.use('/goods',goodsRouter);
app.use('/category',categoryRouter);
app.use('/order',orderRouter);
app.use('/report',reportRouter);
app.use('/permission',perRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
