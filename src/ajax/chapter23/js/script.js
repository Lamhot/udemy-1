$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function(event){
		event.preventDefault();

		//hide(), toggle()
		$(this).closest('.item-box').find('.more-info').toggle('slow', function(){
			alert('finished');
		});
	});
});