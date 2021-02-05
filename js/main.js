
/*
# -------------------------------------------------------------- #
#                          AOS
# -------------------------------------------------------------- #
*/
function aos_init() {
  AOS.init({
    duration: 1000
  });
}

aos_init();

/*
# -------------------------------------------------------------- #
#                          Meerkat typed
# -------------------------------------------------------------- #
*/
if ($('.typed').length) {
  var typed_strings = $(".typed").data('typed-items');
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}


/*
# -------------------------------------------------------------- #
#                           NavBar
# -------------------------------------------------------------- #
*/

$("#oc").click(function (e) {

  if ($("#oc").hasClass('closed')) {

    $("#oc").html('<i class="fas fa-bars fa-lg"></i>');
    $("#oc").removeClass("closed");

  } else {

    $("#oc").html('<i class="fas fa-times fa-lg"></i>');
    $("#oc").addClass("closed");

  }
  
  $("#wrapper").slideToggle("slow");

});

$(".nav-i").click(function (e) {

  if ( $("#oc").is(":visible") ) {
    $("#oc").html('<i class="fas fa-bars fa-lg"></i>');
    $("#oc").addClass("closed");
    $("#wrapper").slideToggle("slow");
  }

});

/*
$(window).resize(function () { 
  if ( $("#oc").is(":visible") ) {
    $("#wrapper").hide();
  }else{
    $("#wrapper").show();
  }
});
*/

/*
# -------------------------------------------------------------- #
#                          Back To Top
# -------------------------------------------------------------- #
*/

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  return false;
});


/*
# -------------------------------------------------------------- #
#                          Other
# -------------------------------------------------------------- #
*/

$(".me").click(function (e) {
  $(".me").prop("src", "../img/hero-bg.jpg");
});






