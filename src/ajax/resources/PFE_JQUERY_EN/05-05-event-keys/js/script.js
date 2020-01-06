$(document).ready(function() {
	//keydown, keyup
	$('#example').on('keyup', 'input', function() {
		$('#result').html('Your name is: ' + $(this).val());
	});
});