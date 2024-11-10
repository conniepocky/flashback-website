
$(window).on("scroll", function() {
    $(".fade").each(function() {
      let objectBottom = $(this).offset().top + $(this).outerHeight() / 2; 
      let windowBottom = $(window).scrollTop() + $(window).innerHeight();
  
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      } else { 
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
});
  
$(document).ready(function() {
  $('.email').on('click', function() {
    const email = "cpa.dev.contact@gmail.com";

    const $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(email).select();

    try {
      const successful = document.execCommand('copy');
      
      if (successful) {
        alert("Email copied to clipboard!");
      }
    } catch (err) {
      console.error('Unable to copy', err);
    }

    $temp.remove();
  });
});
