var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//context.fillRect(20,10,250,175);

var n = 0;
var Xveg = canvas.width;
var Yveg = canvas.height;

context.beginPath();
context.moveTo(n, Yveg) ;
context.lineTo(Xveg,n);
context.strokeStyle = "red";
context.stroke();

context.beginPath();
context.moveTo(n, n) ;
context.lineTo(Xveg,Yveg);
context.strokeStyle = "red";
context.stroke();