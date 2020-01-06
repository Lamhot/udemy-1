$(document).ready(function() {
	$('#example').on('click', 'a', function(e) {
		e.preventDefault();	
		e.stopPropagation();	
		console.log('hello');
	});

	$('#example').on('click', function(e) {
		console.log('hello container');
	});
});