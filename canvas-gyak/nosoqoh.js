var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;
var x = 0;
var y = 0;
var hue = 360;

for(i=0;i<17;i++){
context.fillStyle = 'hsla('+hue+', 50%, 45%, 1)';
context.fillRect(x,y,w,h);
x+=10;
y+=10;
w-=20;
h-=20;
hue-=360/17;
}