$(document).ready(function() {
	
	//CSS selectors
	var result = $('#animals .creature');
	console.log(result);

	//DOM traversing (more efficient)
	result = $('#animals').find('.creature');
	console.log(result);
});