$(document).ready(function() {
	//first(), last()
	var result = $('#animals').children().first()
		.children('.creature').last();
	console.log(result);

	//prev()
	result = $('#animals').children().first()
		.children().last().prev().prev();
	console.log(result);

	//next()
	var result = $('#animals').children().first()
		.children('.creature').first().next();
	console.log(result);
});