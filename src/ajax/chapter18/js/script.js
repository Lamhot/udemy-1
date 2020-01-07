$(document).ready(function () {
	// e there as a parameter that you can modify to other type
	$('#example').on('click', 'a', function (e) {
		e.preventDefault();
		e.stopPropagation(); /// if we do this one, then would not execute the next action
		console.log('hello');


	});
	// this will not be executed since  the is stopPropagation
	$('#example').on('click', function (e) {
		console.log('hello container');

	})



})