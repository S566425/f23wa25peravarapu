var express = require('express');
var router = express.Router();
var xx;
var y;
var atan;
var exp;
var exmp1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    router.put(x=Math.random());
    router.put(y=Math.round(x));
    router.put (a = Math.floor(x));
    router.post(atan=Math.atan(a));
    router.post(exp=Math.exp(a));
    router.post(exmp1=Math.expm1(a));
    
    res.send('Math.atan() applied to '+x+' is '+atan + ' \n Math.exp() applied to '+x+' is '+exp+ ' Math.exmp1() applied to '+x+' is '+exmp1);
    
});

module.exports = router;
