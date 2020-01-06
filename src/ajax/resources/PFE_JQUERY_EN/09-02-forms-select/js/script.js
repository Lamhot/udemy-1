$(document).ready(function() {

	//has any pets?
	$('#hasPets').on('change', function(){
		if($(this).is(':checked')) {
			$('#pets-row').show();			
		}
		else {
			$('#pets-row').hide();
			$('#pet').val('');	
			$('#pet-feedback').empty();	
		}
	});
	$('#hasPets').trigger('change');

	$('#pet').on('change', function(){
		var pet  = $(this).val();

		if(pet == 'Dog') {
			$('#pet-feedback').text('Dogs are great!');
		}
		else if(pet == 'Cat') {
			$('#pet-feedback').text('Cats are fun!');
		}
		else {
			$('#pet-feedback').empty();	
		}
	});
	$('#pet').trigger('change');
});
