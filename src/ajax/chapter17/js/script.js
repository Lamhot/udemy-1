$(document).ready(function () {

	$('#example').on('keyup','input', function () {
		$('#result').html('Your name is: ' + $(this).val());

	})
})