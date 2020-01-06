$(document).ready(function() {
	$('#hasPets').on('change', function(){
		if($(this).is(':checked')) {
			$('#pets-row').show();
		}
		else {
			$('#pets-row').hide();
		}
	});
	$('#hasPets').trigger('change');

});
