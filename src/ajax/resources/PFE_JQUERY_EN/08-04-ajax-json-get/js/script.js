$(document).ready(function() {
  
  //load from the server
  $.ajax('destinations.json', {
     dataType: 'json',
     contentType: 'application/json',
     cache: false
  })
  .done(function(response){
    console.log(response);
    var html;
    $.each(response, function(index, element){
      //you can also use a templating engine like Underscore.js, Mustache.js, Handlebars.js  http://garann.github.io/template-chooser/
      html = '<div class="item-box" data-id="'+element.id+'">';
      html += '<img src="images/'+element.image+'" />';
      html += '<div class="item-title">'+element.name+'</div>';
      html += '<p>'+element.description+'</p>';
      html += '<div class="item-price">$'+element.price+'</div>';
      html += '<button>Add to cart</button>';
      html += '<div><a href="#" class="info-link">More info</a></div>';
      html += '<div class="more-info"><p>'+element.moreInfo+'</p></div>';
      html += '</div>';

      $('body').append(html);
    });
  });
  
  //show additional info for the destination
  $('body').on('click', '.info-link', function(event) {
    event.preventDefault();
    $(this).closest('.item-box').find('.more-info').slideToggle();
  }); 
});
