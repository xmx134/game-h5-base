var KEY = {
  UP: 38,
  DOWN: 40,
  w: 87,
  s: 83
}
var pingpong = {
  pointA: 0,
  pointB: 0
}
pingpong.pressedKeys = [];

pingpong.ball = {
  speed: 5,
  x: 150,
  y: 100,
  directionX: 1,
  directionY: 1
}


$(() => {
  pingpong.timer = setInterval(gameLoop, 30);
  $(document).keydown((e) => {
    pingpong.pressedKeys[e.which] = true;
  })
  $(document).keyup((e) => {
    pingpong.pressedKeys[e.which] = false;
  })
})

function gameLoop() {
  movePaddles();
  moveBall();
}

function movePaddles() {
  let topB = parseInt($('#paddleB').css('top'));
  let topA = parseInt($('#paddleA').css('top'));
  if (pingpong.pressedKeys[KEY.UP]) {
    $('#paddleB').css('top', topB - 5);
  }
  if (pingpong.pressedKeys[KEY.DOWN]) {
    $('#paddleB').css('top', topB + 5);
  }
  if (pingpong.pressedKeys[KEY.w]) {
    $('#paddleA').css('top', topA - 5);
  }
  if (pingpong.pressedKeys[KEY.s]) {
    $('#paddleA').css('top', topA + 5);
  }
}

function moveBall() {
  var playgroundHeight = parseInt($('#playground').height());
  var playgroundWidth = parseInt($('#playground').width());
  var ball = pingpong.ball;

  if (ball.y + ball.speed * ball.directionY > playgroundHeight) {
    ball.directionY = -1
  }
  if (ball.y + ball.speed * ball.directionY < 0) {
    ball.directionY = 1;
  }

  if (ball.x + ball.speed * ball.directionX > playgroundWidth) {
    ball.x = 250;
    ball.y = 100;
    $('#ball').css({
      'top': ball.y,
      'left': ball.x
    })
    console.log('Aヾ(￣ー￣)X(^▽^)ゞ胜利')
    alert('Aヾ(￣ー￣)X(^▽^)ゞ胜利')
    ball.directionX = -1
    pingpong.pointA++;
    $('#pointA').html(pingpong.pointA);
  }
  if (ball.x + ball.speed * ball.directionX < 0) {
    ball.x = 250;
    ball.y = 100;
    $('#ball').css({
      'top': ball.y,
      'left': ball.x
    })
    console.log('Bヾ(￣ー￣)X(^▽^)ゞ胜利')
    alert('Bヾ(￣ー￣)X(^▽^)ゞ胜利')
    ball.directionX = 1;
    pingpong.pointB++;
    $('#pointB').html(pingpong.pointB)
  }

  var paddleAX = parseInt($('#paddleA').css('left')) + parseInt($('#paddleA').css('width'))
  var paddleAYBottom = parseInt($('#paddleA').css('top')) + parseInt($('#paddleA').css('height'))
  var paddleAYTop = parseInt($('#paddleA').css('top'))

  if (ball.x + ball.speed * ball.directionX <= paddleAX) {
    if (ball.y + ball.speed * ball.directionY <= paddleAYBottom
      && ball.y + ball.speed * ball.directionY >= paddleAYTop) {
        ball.directionX = 1
      }
  }

  var paddleBX = parseInt($('#paddleB').css('left'))
  var paddleBYBottom = parseInt($('#paddleB').css('top')) + parseInt($('#paddleB').css('height'))
  var paddleBYTop = parseInt($('#paddleB').css('top'))

  if (ball.x + ball.speed * ball.directionX >= paddleBX) {
    if (ball.y + ball.speed * ball.directionY <= paddleBYBottom
      && ball.y + ball.speed * ball.directionY >= paddleBYTop) {
        ball.directionX = -1
      }
  }
  ball.x += ball.speed * ball.directionX
  ball.y += ball.speed * ball.directionY

  $('#ball').css({
    'left': ball.x,
    'top': ball.y
  })
}