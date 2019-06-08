var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var a = 250;
var b = 50;
var cw = 450;
var ch = 300;

var OX = 30;
var OY1 = 40;

var contWidth = cw-2*OX;
var contHeight = (ch-2*OY1)/3;

var OY2 = OY1+contHeight;
var OY3 = OY1+2*contHeight;

context.fillStyle = 'red';
context.fillRect(OX,OY1,contWidth,contHeight);

context.fillStyle = 'white';
context.fillRect(OX,OY2,contWidth,contHeight);

context.fillStyle = 'green';
context.fillRect(OX,OY3,contWidth,contHeight);