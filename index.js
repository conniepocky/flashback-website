
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

$(".back").css({
  rotateX: '-180deg'
});
$(".prompts").css({
  transformStyle: "preserve-3d",
  perspective: '150px',
  rotateX: 0,
  width: $(".front").width(),
  height: $(".front").height()
});
$("h3").css({
  backfaceVisibility: "hidden",
  perspective: '150px'
});

var words = [
  "A winters day", "A friend who always makes me laugh", "A song that brings back memories", "Kaleidoscope",
  "A favorite New Year’s Eve moment", "A moment I felt proud of someone close to me", "What era do you wish you had lived in?", "A time I felt incredibly lucky"],
  angle = 0;

setInterval(function (){
  angle -= 180;
  $('.prompts').transition({
      rotateX: '-=180deg'
  }, 600);
  
  var currentB = "." + ((angle / 180) % 2 ? "front" : "back"),
      current = "." + ((angle / 180) % 2 ? "back" : "front");
  $(current).html(words[(Math.random() * 8) | 0]);
  $(".prompts").transition({
      width: $(current).width()
  }, 200);
}, 1300);