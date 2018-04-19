$(function(){
  $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1,
    dots: true,
    fade: false,
  });


  $('#img').click(function(){
    $('.single-item').js('autoPlay', 'falese');
  })

  $('#img2').click(function(){
    $('.single-item').js('autoPlay', 'true');
  })
});
