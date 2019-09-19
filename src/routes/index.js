// routes/index.js
import express from 'express';
import User from '../app/models/user';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Arabica.js'
  });
});

router.post('/register', (req, res) => {
  var post = new User();
  post.name = "Arabica";
  post.password = "arabica";
  post.save((err, data) => {
    console.log(err, data);
    res.status(200).send({
      data: data
    });
  });
});

router.post('/login', (req, res) => {
  res.status(200).send({
    access_token: ''
  });
});

export default router;