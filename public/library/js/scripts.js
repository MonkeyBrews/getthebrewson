var countCookies 		= 0;
var totalNames 			= 0;
var id					= 0;
var cookies 			= '';

$(document).ready(function() {

	$(".add-name").submit(function(e) {
	    e.preventDefault();
	});



	// Set ID based on current number of list items
	countCookies	= $.cookie('brewer_existing');

	if(countCookies == 'NaN') {
		countCookies	= 0;
	}

	totalNames 		= $(".brew-list li").length;
	id				= countCookies++;
	var oButton		= document.getElementById('addBrewer');
	var data		= document.getElementById('dataInput');
	var display		= document.getElementById('brewList');



	oButton.onclick = function() {
		$.cookie('brewer_number_' + id, data.value);
		$.cookie('brewer_total', totalNames);
		$.cookie('brewer_existing', countCookies);
		display.innerHTML += '<li class="option option-' + id + '" data-name="brewer_number_' + id + '"><span class="option--name">' + data.value + '</span> <span class="option--delete">Remove this name</span></li>';
	};



	$('#addBrewer').click(function() {

		id++;
		if($('.brew-list li').length > 1 ) {
			$('#brews').addClass('brewme');
		}
		$('#dataInput').val('');

		totalNames++;
		countCookies++;

		$.cookie('brewer_total', totalNames);
		$.cookie('brewer_existing', countCookies);

		console.log('Total Name = ' + totalNames);
		console.log('Count cookies = ' + countCookies);

	});



	$('#brews').click(function() {

		rollForBrewer();

	});

	$('#clearbrewers').click(function() {

		clearBrewers();
		//clear the display
		$( ".brew-list" ).empty();

	});

	$('#reRoll').click(function() {

		rollForBrewer();

	});



	$('body').on('click', '.option--delete', function () {

		$(this).closest('.option').slideUp('fast');
		var readyToDelete = $(this).closest('.option');
		setTimeout(function() {
			$(readyToDelete).remove();
		}, 1200);

		var cookieToMuch = $(this).closest('.option').data('name');

		eraseCookie( cookieToMuch );

		totalNames--;
		$.cookie('brewer_total', totalNames);

	});



});



/*

	Function which clears the list of names

*/
function clearBrewers(){

	cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++)
	  eraseCookie(cookies[i].split("=")[0]);
	id	= 1;
	totalNames = 0;
	countCookies = 0;
	$.cookie('brewer_total', totalNames);
	$.cookie('brewer_existing', countCookies);

}



/*

	Function which clears the cookies

*/
function eraseCookie(name) {
    createCookie(name,"",-1);
}



/*

	Function which creates the name cookie

*/
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}



/*

	Function which organises the selection animation

*/
function rollForBrewer() {

	if(jQuery('.kettle--outer').hasClass('hidden')) {

		jQuery('.brew--action').addClass('push');

		setTimeout(function() {
			jQuery('.kettle').addClass('fall-in');
			jQuery('.kettle--outer').removeClass('hidden');
		}, 500);

		setTimeout(function() {
			getBrewer();
		}, 1000);

		setTimeout(function() {
			jQuery('.kettle').removeClass('fall-in');
		}, 2000);

	} else {

		//jQuery('.kettle').removeClass('boiling');
		jQuery('.kettle').removeClass('boiled');
		jQuery('.kettle--name--wrap').removeClass('show');

		getBrewer();

	}

}



/*

	Function which get the selected name

*/
function getBrewer() {

	jQuery('.brew-list').addClass('brew-list__active');
	jQuery('.brew-list li').removeClass('itsme');

	var brewlist			= jQuery('.brew-list li').toArray();
	var elemlength			= brewlist.length;
	var randomnum			= Math.floor(Math.random()*elemlength);
	var randomitem			= brewlist[randomnum];
	var brewerName			= jQuery(randomitem).find('.option--name').text();

	jQuery(randomitem).addClass('itsme');

	setTimeout(function() {
		jQuery('.kettle--name').text(brewerName);
	}, 500);

	setTimeout(function() {
		jQuery('.kettle').addClass('boiling');
	}, 2000);

	setTimeout(function() {
		jQuery('.kettle').addClass('boiled');
	}, 4000);

	setTimeout(function() {
		jQuery('.kettle--name--wrap').addClass('show');
	}, 6000);

}
