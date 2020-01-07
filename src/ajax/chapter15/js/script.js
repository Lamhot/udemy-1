$(document).ready(function () {
	$('#example').on('click','button',function () {
		//console.log('click');
		var selected = $('#place option:selected');
		var value= selected.val();// give value

		//var price = selected.data('price');
		var price = selected.attr('data-price');
		console.log(value);
		console.log(price);
		console.log(selected.attr('data-price'));

		if(price)
		{
			$('#result').html(value + ' ' + price)
		}

	})

})