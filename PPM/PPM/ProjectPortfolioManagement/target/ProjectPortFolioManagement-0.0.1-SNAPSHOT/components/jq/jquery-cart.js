/* Name: Live jQuery Cart */
/* Description: Update the Retail Price, Todays Price and Total Savings as the Quantity field is adjusted. */
/* Created by: http://techNerdia.com */
/* Using: http://code.google.com/p/jquery-formatcurrency/ */
/* Required: jquery.formatCurrency-1.4.0.js */
	
$(document).ready(function(){
 $.ajaxSetup( {cache:false} );
	
/* Change Display For Retail Price and Todays Price. */
$('input[name=quantity]').keyup( function() {
	var value = $(this).attr("value");
	
	while ( value.substring(0, 1) === '0' || value.length > 3 ) { 	/* no leading zero, max 3 chars */
        value = value.substring(1);									/* return to nothing */
    }
	
	value = value.replace(/[^0-9\.]/g,'');							/* numbers only */
	value = value.replace(/\./g,'');								/* no periods */
	$(this).val(value);
	
	var real = '125.00'; 	/* retail price */
	var cost = '80.00'; 	/* for sale price */
	
		if ( value == '' || value == "0" || value == "1" ) { 		/* default */
			var retail = '';
			var saved = '';
	
			value = '1';
			retail = real;
			saved = real - cost;
	
		}else{
			var total_cost = '';
			var retail = '';
			var saved = '';
			total_cost = parseInt(value) * cost;
	
			retail = parseInt(value) * real;
			saved = retail - total_cost;
	
		}
	
	var total = '';
	total = parseInt(value) * cost;
	
/* output */
	$(".pRetail").replaceWith('<span class="pRetail">' + retail + '</span>');
	$(".pRetail").formatCurrency();
	
	$(".pToday").replaceWith('<span class="pToday">' + total + '</span>');
	$(".pToday").formatCurrency();
	
	$(".save").replaceWith('<span class="save">' + saved + '</span>');
	$(".save").formatCurrency();
	
	$(".input").replaceWith('<input type="hidden" name="price" value="' + total + '" class="input" />');
	$(".input").formatCurrency();
	
} );
	
	
	
}); /* Do Not Remove */