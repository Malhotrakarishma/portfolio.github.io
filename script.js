$(document).ready(function () {
  var $homeTop = $(".main").offset().top;
  $("#home").click(function () {
    $("html, body").animate({ scrollTop: $homeTop }, 0);
  });

  var $aboutTop = $("#about-content").offset().top;
  $("#about").click(function () {
    $("html, body").animate({ scrollTop: $aboutTop }, 1000);
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


    $("#icon1").click(function (){
      $(".menu ul").show();
  });

});
