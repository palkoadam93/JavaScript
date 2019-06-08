var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function filledStar(x,y,a){
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x+a, y);
  context.lineTo(x+a/9, y+a/2);
  context.lineTo(x+a/2, y-a/3);
  context.lineTo(x+a-a/9, y+a/2);
  context.closePath();
  context.fillStyle = '#FCC1BE';
  context.fill();
}

filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);