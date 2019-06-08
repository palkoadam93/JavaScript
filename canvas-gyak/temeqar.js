var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var OX = 10;
var OY = 10;
var sqW = 30;

for (i=0;i<5;i++){
  for (j=0;j<=i;j++){
    context.fillRect(OX+j*(sqW+3),OY+i*(sqW+3),sqW,sqW);
  }
}