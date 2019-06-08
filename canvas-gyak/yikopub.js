var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//context.fillRect(50,50,canvasWidth-100,canvasHeight-100);

context.fillStyle = 'orange';
context.fillRect(canvasWidth/2,canvasHeight/2,canvasWidth/2,canvasHeight/2);