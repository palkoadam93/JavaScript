var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

context.fillStyle = 'rgb(255, 0, 0, 50%)';
context.fillRect(canvasWidth/3,canvasHeight/3,200,200);

context.fillStyle = 'rgb(66, 128, 244, 50%)';
context.fillRect(0,0,200,200);