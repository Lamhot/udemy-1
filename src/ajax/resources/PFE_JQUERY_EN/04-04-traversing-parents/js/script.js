$(document).ready(function() {
	//parent()
	var result = $('#cat').parent();
	console.log(result);

	//parents()
	result = $('#cat').parents('.category');
	console.log(result);

	//closest()
	result = $('#cat').closest('.category');
	console.log(result);
});