$(document).ready(function(){
  
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // 2000 milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    (function(){

    var lastScrollTop = 0;

    $(document).on('scroll',function(){
      var currentScrollTop = $(this).scrollTop();

      if(currentScrollTop>lastScrollTop) 
        $('nav').addClass('hidden');

      else $('nav').removeClass('hidden');

      lastScrollTop = currentScrollTop;
    });


  })();

/*
  $('.read').on('click',function(){
    if ('.more-1' = '.hidden') {
    $('.more-1').addClass('show').slide(200);
    $('.read').text('<<');
    }
    else(
    $('.more-1').removeClass('show').slide(200);
    $('.read').text('>>');
      );
  });
*/
  //nav menu for small devices
  $(".mob-nav").click(function() {
      $(".menu-nav").slideToggle();
    });

  //animate scroll to top entrance & exit of button
  var $btt = $('.go-top');
  
  $btt.on('click', function(){
    $('html , body').animate({
      scrollTop:0
    } , 500);
  });

  //scroll to top
  

  $(window).on('scroll',function(){
    var self = $(this),
        height = self.height(),
        top = self.scrollTop();

        if(top > height){
          if (!$btt.is(':visible')) {
            $btt.show();
          }
        }else{
          $btt.hide();
        }
  });
});

