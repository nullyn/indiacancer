$(document).ready(function(){
  if($(window).width() > 767)
  {
    $(".col-center").addClass("display")
    console.log("if");
     // change functionality for smaller screens
  }
  if($(window).width() < 1000){
     // change functionality for larger screens
     console.log("Hi");
     $(".col-center").removeClass("display");

  }

});
