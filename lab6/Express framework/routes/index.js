var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { errmessage:'',csrfTokens: req.csrfToken()});
});


module.exports = router;
