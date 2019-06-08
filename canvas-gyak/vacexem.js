var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = '#C74F78';
context.fillRect(20,10,250,175);

context.fillStyle = 'orange';
context.fillRect(300,300,50,50);

context.beginPath();
context.moveTo(55, 70) ;
context.lineTo(150,100);
context.strokeStyle = "orange";
context.stroke();

context.beginPath();
context.moveTo(0, 350) ;
context.lineTo(400,0);
context.strokeStyle = "orange";
context.stroke();