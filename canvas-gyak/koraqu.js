var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var O = 40;

for (i = 0; i < 10; i++) {

  context.fillStyle = 'rgba(240,255,0,50%)';
  context.fillRect(O,O,40,40);
  O+=20;
  
}