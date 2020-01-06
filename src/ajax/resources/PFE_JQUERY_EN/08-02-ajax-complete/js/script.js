$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('result.html', {
			beforeSend: function() {
				$('#status').text('Cargando..');
			}
		})
		.done(function(response){
			$('#result').html(response);
		})
		.always(function(){
			$('#status').text('Completado');
		});		
	});	
});