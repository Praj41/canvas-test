var canvas;
var canvasContext;
var posx1 = -200;
var posy1 = 300;
var movedirLR = 1;
var movedirUD = 1;
var moveside = 1;

window.onload = function () {
    console.log("Hello");
    var i;
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(draw , 7);
}

function draw() {
    move();
    kbinput();
    console.log(posx1 , posx1 - 110 , posx1 - 220 , posx1 - 330);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(posx1, posy1, 50, 50);
    if(moveside == 1 && movedirLR == 1) {
        canvasContext.fillStyle = 'green';
        canvasContext.fillRect(posx1 - 55, posy1, 50, 50);
    }
    else if(movedirLR == -1 && moveside == 1)
    {
        canvasContext.fillStyle = 'green';
        canvasContext.fillRect(posx1 + 55 , posy1 , 50, 50);
    }
    else if(movedirUD == -1 && moveside == 0)
    {
        canvasContext.fillStyle = 'green';
        canvasContext.fillRect(posx1 , posy1 + 55, 50, 50);
    }
    else if(movedirUD == 1 && moveside == 0)
    {
        canvasContext.fillStyle = 'green';
        canvasContext.fillRect(posx1 , posy1 - 55, 50, 50);
    }

    //canvasContext.fillStyle = 'red';
    //canvasContext.fillRect(posx1 - 220, posy1, 50, 50);
    //canvasContext.fillStyle = 'green';
    //canvasContext.fillRect(posx1 - 330, posy1, 50, 50);
}

function kbinput()
{
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: {
                movedirLR = -1;
                moveside = 1;
                break;
            }
            case 39:
            {
                movedirLR = 1;
                moveside = 1;
                break;
            }
            case 40 :
            {
                movedirUD = 1;
                moveside = 0;
                break;
            }
            case 38 :
            {
                movedirUD = -1;
                moveside = 0;
                break;
            }
            default :
                break;
        }
    }
}

function move() {
    if(moveside == 1) {
        posx1 = posx1 + movedirLR;
    }
    else {
        posy1 = posy1 + movedirUD;
    }
    if(posx1 >= 1130 || posy1 >= 900 || posy1 <= -100 ) {
        posx1 = -200;
        posy1 = 300;
    }
}