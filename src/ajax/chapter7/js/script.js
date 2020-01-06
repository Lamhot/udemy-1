$(document).ready(function() {
	//our code goes
	//$('#container').text('hello');
	//$('.class1').text('hello');
	//$('.class1,.class2').addClass('highlighted');
	// if the element li not directly after listing then  > should not be covered
	$('#listing > li').addClass('highlighted');
});