$(document).ready(function () {
	// this one using event delegation
	$('#add-container').on('click','button', function () {
		var value = $('#add-container input').val();
		console.log(value);
		// the we need to append new element

		var html = '<div class="item">\
			               <div class="remove">X</div> '+ value  + '</div>';
		console.log(html);

	//	$('#places-container').append(html);
		// or the other option is using the element it self

		$(html).appendTo('#place-container');
		


	})

})