var canvas;
var canvasContext;
var posx1 = -200;
var posy1 = -200;

window.onload = function () {
    console.log("Hello");
    var i;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(draw , 7);
}

function draw() {
    posx1 = posx1 + 1 ;
    posy1 = posy1 + 1 ;
    if(posx1 >= 800) {
        posx1 = -200;
        posy1 = -200;
    }
    console.log(posx1);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(posx1, 300, 200, 100);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(350, posy1, 100, 200);
}