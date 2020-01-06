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

  //listen to pet select box
  $('#pet').on('change', function() {
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

  $('#your-form').on('submit', function(e) {
     e.preventDefault(); 
     
     //alternative: instead of 'formSubmit.json' you can grab the target from the form tag: $(this).attr('action')
     $.ajax('formSubmit.json', {
       type:'POST', 
       data: $('#your-form').serialize()       
     })
     .done(function(response){
      $('#result').text(response.message);
     }); 
  });


});
