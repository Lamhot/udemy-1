$(document).ready(function() {
	$('#example').on('click', function(){
		console.log(this);
		console.log($(this));

		//$(this).addClass('highlighted');
		$(this).toggleClass('highlighted');
	});
});