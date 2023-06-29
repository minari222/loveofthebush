$(function(){

  // 로고 누르면 스크롤
  $("footer img").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });




});