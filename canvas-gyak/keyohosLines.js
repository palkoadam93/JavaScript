var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//context.fillRect(20,10,250,175);

var fely = canvas.height/2;
var felx = canvas.width/2;
var y;

for(i=0;i<=canvas.width;i+=3){
  context.beginPath();
  context.moveTo(i, fely);
  if(i%2===0) y=0; else y=canvas.height;
  context.lineTo(felx,y);
  context.stroke();
}