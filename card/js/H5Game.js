$(() => {
  for (var i = 0; i < 11; i++) {
    $('.card:first-child').clone().appendTo('.cards');
  }
  $('.cards').children().each(function(index) {
    $(this).css({
      'left':  ($(this).width() + 20) * (index % 4),
      'top': ($(this).height() + 20) * Math.floor(index / 4)
    })
    $(this).click(function(){
      $(this).toggleClass('card-flipped');
    })
  })
})