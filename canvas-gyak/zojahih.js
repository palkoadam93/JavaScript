var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var OX = 10;
var OY = 10;
var sqW = 30;

var r = 199;
var b = 120;

for (i=0;i<6;i++){
  for (j=0;j<6;j++){
    context.fillStyle = 'rgb('+r+',79,'+b+')';
    context.fillRect(OX+j*(sqW+3),OY+i*(sqW+3),sqW,sqW);
    r-=7;
  }
  b+=15;
}