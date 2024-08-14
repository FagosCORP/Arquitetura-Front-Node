import express from "express";
import createHttpError from 'http-errors';
import morgan from "morgan";
import path, { dirname } from 'path'
import { routes } from "./routes/index.js";


var logger = morgan;
export var app = express();

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.use('/', routes);

app.use(function(req, resp, next) {
  next(createHttpError(404));
});

app.use(function(err, req, res, _) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

