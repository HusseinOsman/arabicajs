// routes/index.js
import express from 'express';
import AuthController from '../app/controllers/authController'
import Authentication from '../app/middleware/authentication';
const authController = new AuthController();
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Arabica.js'
  });
});

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/secure', Authentication.check, (req, res) => {
  res.status(200).send({
    success: true,
    user: req.user
  });
});

export default router;