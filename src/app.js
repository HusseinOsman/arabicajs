// app.js
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';
import passport from 'passport';
import indexRouter from './routes/index';

const app = express();

require('./config/passport');

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('X-Powered-By', 'arabica')
    next()
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);

export default app;