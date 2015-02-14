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
	if (querystring.tn){
		tuc.getBalance(querystring.tn, function( balance ){
			if (balance.error)
				res.render('index',{
					error: true
				});
			else{
				var dat = {
		    		hasnumber: false,
		    		host: hostnm,
		    		numero: querystring.tn,
		    		saldo: balance
		    	};
		    	if (querystring.bk){ //bookmarlet request
		    		dat.fromBK = true;
		    	}
		    	res.render('index', dat);
			}
		});
	}else{
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
