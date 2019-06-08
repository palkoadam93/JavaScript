var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var contWidth = 150;
var contHeight = contWidth;
var contOX = canvas.width-(contWidth+10);
var contOY = canvas.height-(contHeight+10);

context.fillStyle='green';
context.fillRect(contOX,contOY,contWidth,contHeight);