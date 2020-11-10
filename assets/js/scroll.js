$(function() {
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 3500) {
        $(".scroll").fadeIn();
    } else {
        $(".scroll").fadeOut();
    }
});
  $(".scroll").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, "slow");
});