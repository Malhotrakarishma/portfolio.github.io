$(document).ready(function () {
  $("#open").click(function (){
    $("ul.ul").toggle();
  });
  var $homeTop = $(".main").offset().top;
  $("#home").click(function () {
    $("html, body").animate({ scrollTop: $homeTop }, 0);
  });

  var $aboutTop = $("#about-content").offset().top;
  $("#about").click(function () {
    console.log ("about Height: " + $aboutTop);
    console.log ("header Height: " + $homeTop);
    $("html, body").animate({scrollTop: $aboutTop+20}, 1000);
  });

  var $skillTop = $("#skill_id").offset().top;
  $("#skills").click(function () {
    $("html, body").animate({ scrollTop: $skillTop }, 1000);
  });

  $("#contactanchor").click(function () {
    $(".popup").show();
  });

  $(".close").click(function () {
    $(".popup").hide();
  });
 
  // $("#close").click(function (){
  //   $(".hide").toggle();
  // });

  // $("#close").click(function (){
  //   $(".hide").toggle();
  // });
  // $("#open").click(function (){
  //   $(".hide").toggle();
  // });

});
