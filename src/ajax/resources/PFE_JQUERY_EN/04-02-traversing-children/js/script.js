$(document).ready(function() {

	//CSS selector
	var result = $('#animals > .creature');
	console.log(result);

	//DOM traversing
	result = $('#animals').children('.creature');
	console.log(result);
});