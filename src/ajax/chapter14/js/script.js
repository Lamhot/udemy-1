$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		console.log($(this));

		$(this).toggleClass('highlighted');
		$(this).parent().toggleClass('highlighted');
	})
});