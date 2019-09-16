// routes/index.js
import express from 'express';
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/test', function (req, res, next) {
  res.json({
    title: 'test'
  });
});
export default router;