var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

var n = 0;
var chfel = ch/2;
var cwfel = cw/2;

context.beginPath();
context.moveTo(n,chfel) ;
context.lineTo(cw,chfel);
context.strokeStyle = "red";
context.stroke();

context.beginPath();
context.moveTo(cwfel,n) ;
context.lineTo(cwfel,ch);
context.strokeStyle = "green";
context.stroke();