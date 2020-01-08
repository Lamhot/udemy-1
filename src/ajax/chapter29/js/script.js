$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('result.html')
			.done(function(response){
				$('#result').html(response);
			});		
	});	
});