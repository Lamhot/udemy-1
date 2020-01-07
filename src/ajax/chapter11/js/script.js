$(document).ready(function() {
	//our code goes
	//$('#container').text('hello');
	//$('.class1').text('hello');
	//$('.class1,.class2').addClass('highlighted');
	// if the element li not directly after listing then  > should not be covered
//	$('#listing > li').addClass('highlighted');
	//$('input[required]').addClass('highlighted');
	//$('input[placeholder=Email]').addClass('highlighted');
	//$('input[placeholder*=Name]').addClass('highlighted');
	// var result= $('#animals .creature');
	// //console.log(result);
	// result = $('#animals').find('.creature');
	// console.log(result);
//	var result = $('#animals > .creature');

	//var result= $('#animals').children('.creature');
	///console.log(result);
	var result =$('#animals').children().first()
		.children('.creature').last();
	console.log(result);
	result =$('#animals').children().first()
		.children('.creature').last().prev();
	console.log(result);

	var result =$('#animals').children().first()
		.children('.creature').first().next();
	console.log(result);

});