var express = require('express');
var router = express.Router();
var x;
var y;
var atan;
var exp;
var exmp1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    router.put(y=Math.random()*10);
    router.put(x=Math.floor(y));
    router.post(atan=Math.atan(y));
    router.post(atan=Math.round(atan));
    router.post(exp=Math.exp(y));
    router.post(exp=Math.round(exp));
    router.post(exmp1=Math.expm1(y));
    router.post(exmp1=Math.round(exmp1));
    
    res.send('Math.atan() applied to '+x+' is '+atan + ' <br> Math.exp() applied to '+x+' is '+exp+ '<br> Math.exmp1() applied to '+x+' is '+exmp1);
    
});

module.exports = router;
