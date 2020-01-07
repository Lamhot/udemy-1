$(document).ready(function () {
	//$('#container').text('hello my name is lamhot');
	/// and if you want to change the html code then we need to use this code

	$('#container').html('<strong>Hallo Lamhot Is Strong</strong>');

	console.log($('#container').html());
	// then element will be empty
	$('#container').empty();

	$('#container').attr('new-attribute, 123');
	console.log($('#container').attr(('new-attribute')));

})