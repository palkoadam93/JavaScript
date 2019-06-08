var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//context.fillRect(20,10,250,175);
/*
var n = 0;
var Xveg = canvas.width;
var Yveg = canvas.height;
*/

context.beginPath();
context.moveTo(75,75);
context.lineTo(10,75);
context.lineTo(10,25);
context.strokeStyle("green");
context.stroke();
context.fill();