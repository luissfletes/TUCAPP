var express = require('express');
var router = express.Router();
var Tuc = require('tuc');

var tuc = new Tuc();


// tuc.getType('00759795', function( type ){

//     console.log( type );

// });

/* GET home page. */
router.get('/', function(req, res, next) {
	var hostnm = req.hostname;
	var querystring = req.query;
	console.log(querystring)
	if (querystring.tn){
		console.log('tngo')
		tuc.getBalance(querystring.tn, function( balance ){
	    	res.render('index', {
	    		hasnumber: false,
	    		host: hostnm,
	    		numero: querystring.tn,
	    		saldo: balance
	    	});
		});
	}else{
		console.log('no tngo')
		res.render('index', { 
    		hasnumber: false
    	});
	}
	
})
.post('/',function(req, res, next) {
	var ps = req.body;
	res.redirect('/?tn='+ps.txtTUCNumber)
});

module.exports = router;
