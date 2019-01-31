$(document).ready(function(){
  if ($(window).width() > 767) {
    $("a").attr('target', '_blank');
    $("#cancer-logo-1").css("display","none");

  }
  if ($(window).width() < 767) {
    $(".menu-align").css("width","100%");
    $(".pos-abs").css("display","none");
    $("#cancer-logo-2").css("display","none");
    $(".menu-section").css("padding-top","5px");
    $(".slogan").css("max-width","300px");
    $("body").css("background","none");
  }
  else{
    $("#menu").addClass("menu-align");
  }
  if ($(window).width() < 376) {
    $("#menu").removeClass("menu-align");
      $(".FAQ-align").css("float","left");
  }

});
$(window).resize(function(){
if ($(window).width() > 410) {
  $(".FAQ-align").css("float","right");
}
if ($(window).width() < 376) {
$("#menu").removeClass("menu-align");
$(".FAQ-align").css("float","left");
}

});
