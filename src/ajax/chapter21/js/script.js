$(document).ready(function() {
	$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();

		var html = '<div class="item">\
			<div class="remove">X</div>' + value + '</div>';

	});
	$('#places-container .remove').on('click', function () {
		$(this).parent().remove();

	})

	// or we have another way to represent
	$('#places-container').on('click', '.remove', function () {
		$(this).parent().remove();

	})



});