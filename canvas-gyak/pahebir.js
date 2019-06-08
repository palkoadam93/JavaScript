var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");

var Ax = 200;
var Ay = 100;
var By = 300;

context.beginPath();
context.moveTo(Ax, Ay);
context.lineTo(Ay, By);
context.lineTo(By, By);
context.closePath();

context.strokeStyle = 'grey';
context.stroke();

context.fillStyle = 'orange';
context.fill();