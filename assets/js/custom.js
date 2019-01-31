$(document).ready(function(){
  console.log($(window).width());
  if ($(window).width() > 767) {
    $("a").attr('target', '_blank');
  }
});
