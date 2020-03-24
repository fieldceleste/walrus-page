$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#panda-fadeIn").fadeIn();
    $("#panda-fadeOut").fadeOut();
   });
  });

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#koala-slideUp").slideUp();
    $("#koala-slideDown").slideDown();
  });
});