$(document).ready(function () {

	$('#add-container').on('click','button', function () {
		var value = $('#add-container input').val();

		var html ='<div class="item">\
		<div class="remove">X</div>' + value + '</div>';

		// last after
	//	$('#places-container').children().last().after(html);
		$('#places-container').children().first().before(html);


	//	$('#places-container').children().before(html);


	})
})