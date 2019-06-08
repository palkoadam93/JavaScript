var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var side = 0,
    R = 40; //ez a SUGÁR!

function hexagon(x,y) {
  var side = 0,
      R = 40; //ez a SUGÁR!
  context.beginPath();
  context.moveTo(x+R*Math.cos(0),y+R*Math.sin(0)); //középpontból átmegy a jobb csúcsba
  for (side; side<7; side++) {
    context.lineTo(x + R*Math.cos(side * 2 * Math.PI/6),
                   y + R*Math.sin(side * 2 * Math.PI/6)); //megrajzoljuk az oldalakat
  }
  context.strokeStyle = "orange";
  context.stroke();
}

hexagon(canvas.width/2,canvas.height/2);
//hexagon(canvas.width/2+2*R,canvas.height/2+R); //ELSŐ PIROS - EZ FILL!
hexagon(canvas.width/2+2*R,canvas.height/2-R); //MÁSODIK PIROS
hexagon(canvas.width/2,canvas.height/2-2*R);   //FELSŐ SÁRGA
hexagon(canvas.width/2-2*R,canvas.height/2+R); //ELSŐ KÉK
hexagon(canvas.width/2-2*R,canvas.height/2-R); //MÁSODIK KÉK
hexagon(canvas.width/2,canvas.height/2+2*R);   //ALSÓ SÁRGA

var X = canvas.width/2+2*R,
    Y = canvas.height/2+R;
context.beginPath();
context.moveTo(X + R*Math.cos(0),Y + R*Math.sin(0)); //középpontból átmegy a jobb csúcsba
for (side; side<7; side++) {
  context.lineTo(X + R*Math.cos(side * 2 * Math.PI/6),
                 Y + R*Math.sin(side * 2 * Math.PI/6));
                //megrajzoljuk az oldalakat
}
context.fillStyle = "orange";
context.fill();
