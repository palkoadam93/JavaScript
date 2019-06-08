var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//context.fillRect(20,10,250,175);

function triangle(x,y,a){
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x-a/2,y+a);
  context.lineTo(x+a/2,y+a);
  context.closePath();
  context.fillStyle = "hsl(60,100%,50%,.5)";
  context.fill();
  context.stroke();
}

triangle(230,160,50);
triangle(270,100,50);
triangle(200,50,150);