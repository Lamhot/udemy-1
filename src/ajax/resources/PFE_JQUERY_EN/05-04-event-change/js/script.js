$(document).ready(function() {
	$('#example').on('change', 'select', function(){
		var selected = $(this).find('option:selected');
		var value = selected.val();
		var price = selected.data('price');

		if(price) {
			$('#result').html(value + ' ' + price);
		}
	});
});