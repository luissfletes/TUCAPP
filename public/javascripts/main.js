$(document).on('ready',function() {

	var digitFeedVisible = false;

	$('#txtTUCNumber').keypress(function(e) {
		if (e.which != 13){
			if ($(this).val().length >= 8) return false;
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				if (!digitFeedVisible){
					$("#digitFeed").slideDown(500);
			        digitFeedVisible = true;
			        setTimeout(function() {
			        	$("#digitFeed").slideUp(700,function() {
			        		digitFeedVisible = false;
			        	});
			        },1000);
				}
		        // .delay(500).slideUp(700);
		        return false;
		    }
		}
	});


});