var express = require('express');
var router = express.Router();
var sum=0;
var more=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  router.put(more+1);
  router.put(sum+more);
  res.send('Sum is:'+sum);
});

module.exports = router;
