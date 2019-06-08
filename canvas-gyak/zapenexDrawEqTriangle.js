var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function drawEqTriangle(side, cx, cy, fill){
  var h = side * (Math.sqrt(3)/2);

  context.translate(cx, cy); //ez viszi át a középpontot
  
    context.beginPath();
  context.moveTo(0, -h/2);
  context.lineTo(-side/2, h/2);
  context.lineTo(side/2, h/2);
  context.lineTo(0, -h/2);
    context.closePath();
  
  context.fillStyle = fill;
  context.fill(); 
  
}

drawEqTriangle(50, canvas.width/2, canvas.height/2-50, 'red');//piros
drawEqTriangle(50, canvas.width/2-200, canvas.height/2-100, 'green');//zöld
drawEqTriangle(50, canvas.width/2-276, canvas.height/2-150, 'green');//zöld
drawEqTriangle(50, canvas.width/2-250, canvas.height/2-100, 'blue');//zöld
drawEqTriangle(50, canvas.width/2-125, canvas.height/2-150, 'blue');//kék
drawEqTriangle(50, canvas.width/2-275, canvas.height/2-150, 'blue');//kék