
// Scroll Function

$(function(){

  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

// scroll feature

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });


  // email
  
  $('.push').on('click', function(event) {
    event.preventDefault();
    var email = ($('input').val());
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (filter.test(email)) {
      alert('Thanks for subscribing! ALOHAAAAA');
    } else {
      alert('Invalid Email');
    }
  })

  // Add
  
  var x = 0;

  $('.add').on('click', function(){
    x++;
    $('.int').html(x);
  })










});


  
 