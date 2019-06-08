var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var a,b;

function lineToCenter(x,y,color){
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(canvas.width/2, canvas.height/2);
  context.strokeStyle = color;
  context.stroke();
}

for(i=0;i<100;i++){
  a = Math.random()*canvas.width;
  b = Math.random()*canvas.height;
  lineToCenter(a,b,'red');
}