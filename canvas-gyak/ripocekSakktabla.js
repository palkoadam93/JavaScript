var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function drawCheckeredPattern(row,col){
  var szel = canvas.width/col;
  var mag = canvas.height/row;
  
  for(y=0;y<canvas.height;y+=2*mag){
    for(x=0;x<canvas.width;x+=2*szel){
      context.fillRect(x,y, szel, mag);
      context.stroke();
    }
  }
  for(y=mag;y<canvas.height;y+=2*mag){
    for(x=szel;x<canvas.width;x+=2*szel){
      context.fillRect(x,y, szel, mag);
      context.stroke();
    }
  }
}

drawCheckeredPattern(8,8);