var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Create gradient
var grd = context.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

context.fillStyle = grd;
context.fillRect(10,10,150,80);