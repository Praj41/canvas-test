var canvas;
var canvasContext;

window.onload = function () {
    console.log("Hello");
    var i;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    draw();
}

function draw() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(100, 100, 200, 100);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(100, 200, 200, 100);
}