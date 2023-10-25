var express = require('express');
var router = express.Router();
var xx;
var y;
var atan;
var exp;
var exmp1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    router.put(y=Math.random()*10);
    router.put(x=Math.round(y));
    router.put (a = Math.floor(x));
    router.post(atan=Math.atan(a));
    router.post(exp=Math.exp(a));
    router.post(exmp1=Math.expm1(a));
    
    res.send('atan applied to '+x+' is '+atan + ' \n exp applied to '+x+' is '+exp+ 'exmp1 applied to '+x+' is '+exmp1);
    
});

module.exports = router;
