// routes/index.js
import express from 'express';
import AuthController from '../app/controllers/authController'
import Authentication from '../app/middleware/authentication';
const authController = new AuthController();
let router = express.Router();
import Email from '../app/helper/email';
const email = new Email();
import response from '../app/helper/response';
import passport from 'passport';

import validate from '../app/middleware/validate';
import validateAuth from '../app/validations/auth';

/* GET to check api status. */

 /**
   * @api {get} status status 
   * @apiName Status
   * @apiGroup General
   * 
   * @apiSuccessExample {json} Success-Response:
   *  
   *     HTTP/1.1 200 OK    
   *      {
   *          "success": true
   *      }
   *     
   *     
   * @apiErrorExample {json} Error-Response 0:
   *     HTTP/1.1 500 Server Internal Error
   */

router.get('/status', function (req, res, next) {
  response.success(res);
});

router.post('/auth/register', validate(validateAuth.register), authController.register);

router.post('/auth/login', validate(validateAuth.login), authController.login);

router.get('/auth/check', isAuthenticated, (req, res) => {
  console.log("check =======================================", req.user);
  response.data(res, req.user);
});

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

router.get('/verifyemail', passport.authenticate('jwt'), (req, res) => {
  email.verify((err, success) => {

    if (err)
      response.error(res, err);
    response.data(res, success, "customData");

  });
});

import isAuthenticated from '../app/middleware/isAuthenticated';
// router.get('/check', passport.authenticate('jwt',{session: false}), (req,res) =>{
//   console.log("check =======================================",req.user);
//   response.data(res, req.user);
// });


export default router;