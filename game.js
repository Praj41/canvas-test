var canvas;
var canvasContext;
var posx1 = -200;
var posy1 = 300;

window.onload = function () {
    console.log("Hello");
    var i;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(draw , 7);
}

function draw() {
    posx1 = posx1 + 2 ;
    //if(posx1 >= 350)
    //posy1 = posy1 + 1 ;
    if(posx1 >= 1130) {
        posx1 = -200;
        posy1 = 300;
    }
    console.log(posx1 , posx1 - 110 , posx1 - 220 , posx1 - 330);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(posx1, posy1, 100, 50);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(posx1 - 110, posy1, 100, 50);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(posx1 - 220, posy1, 100, 50);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(posx1 - 330, posy1, 100, 50);
}