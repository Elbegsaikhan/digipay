var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send(
   {
     applinks: {},
     webcredentials: {
       apps: ["N934426HMQ.com.khanbank.wallet"]
     },
     appclips: {}
   })
});

module.exports = router;
