var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var OX = 10;
var OY = 13;
var sqW = 50;
var N;

for(i=0;i<15;i++){
  N=i+1;
  if(N%3===0){
    context.fillStyle = 'hsl(240,100%,50%,.4)';
  }else if(N%5===0){
    context.fillStyle = 'hsl(60,100%,50%,.4)';
  } else if((N%5)&&(N%3)===0){
    context.fillStyle = 'hsl(120,100%,50%,.4)';
  }else{
    context.fillStyle = 'hsla(0,0%,0%,.4)';
  }
  context.fillRect(OX,OY,sqW,sqW);
  OX+=20;
  OY+=10;
}