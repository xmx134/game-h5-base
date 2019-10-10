var KEY = {
  UP: 38,
  DOWN: 40,
  w: 87,
  s: 83
}
$(() => {
  $(document).keydown((e) => {
    switch(e.which) {
      case KEY.UP :
        var top = parseInt($('#paddleB').css('top'));
        $('#paddleB').css('top', top - 5);
        break;
      case KEY.DOWN :
        var top = parseInt($('#paddleB').css('top'));
        $('#paddleB').css('top', top + 5);
        break;
      case KEY.w :
        var top = parseInt($('#paddleA').css('top'));
        $('#paddleA').css('top', top - 5);
        break;
      case KEY.s :
        var top = parseInt($('#paddleA').css('top'));
        $('#paddleA').css('top', top + 5);
        break;
        default:
        break;
    }
  })

})