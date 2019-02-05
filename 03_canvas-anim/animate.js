/*
Team  - Mohammed Jamil, Ahnaf Hasan
SoftDev2 pd6
K03 - They lock us in the tower whenever we get caught ...which is often
2019-02-04
*/

var canvas = document.getElementById('playground');
var button = document.getElementById('circle');
var stop = document.getElementById('stop');
var ctx = canvas.getContext('2d');

var requestID;
var radius = 0;
var growing = true;

function clear() {
    if (canvas.width / 2 == radius) {
        growing = false;
    }
    if (radius <= 0) {
        growing = true;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (growing) {
        radius += 5;
    } else {
        radius -= 5;
    }
    return true;
}

function animate(e) {
    clear();
    make_circle();
    requestID = window.requestAnimationFrame(animate);
}

function stopIt() {
    cancelAnimationFrame(requestID);
}


function make_circle() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#00ffff";
    ctx.fill();
}
button.addEventListener('click', animate);
stop.addEventListener('click', stopIt);