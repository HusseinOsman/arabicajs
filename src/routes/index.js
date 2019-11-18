// routes/index.js
import express from 'express';
import AuthController from '../app/controllers/authController'
import Authentication from '../app/middleware/authentication';
const authController = new AuthController();
let router = express.Router();
import Email from '../app/helper/email';
const email = new Email();
import response from '../app/helper/response';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Arabica.js'
  });
});

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/sendemail', Authentication.check, (req, res) => {
  // Message object
  let message = {
    from: 'Testing Email <web.developer4testing@gmail.com>',
    // Comma separated list of recipients
    to: 'Hussein Mostafa <hussein.mostafa.osman@gmail.com>',
    // Subject of the message
    subject: 'Email Subject',

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
  };

  email.send(message, (err, info) => {
    if (err)
      res.status(500).send({
        success: false,
        "err": err
      });

    res.status(200).send({
      success: true,
      user: req.user,
      "email": info
    });
  });
});

router.get('/verifyemail', (req, res) => {
  email.verify((err, success) => {

    if (err)
      response.returnError(res, err);
    response.returnData(res, success, "customData");

  });
});

export default router;