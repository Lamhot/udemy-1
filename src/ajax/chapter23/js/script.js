$(document).ready(function() {
	$('.item-box').on('click','a.info-link', function (event) {
		event.preventDefault();

		//chapter 23
		/*$(this).closest('.item-box').find('.more-info').toggle('slow',function () {
        alert("hi");
		})*/
		//chapter 24
		//$(this).closest('.item-box').find('.more-info').fadeToggle('slow');

		//chapter 25 use slide
		$(this).closest('.item-box').find('.more-info').slideToggle('fast');


	})
});