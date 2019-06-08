var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//context.fillRect(20,10,250,175);

var O = 10;

for(i=0;i<30;i++){

  context.beginPath();
  context.moveTo(O, O);
  context.lineTo(O, O+30);
  context.lineTo(O+30, O+10);
  context.closePath();
  context.stroke();
  O+=5;

}