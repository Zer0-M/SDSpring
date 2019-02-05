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
var clicked;

function clear() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
    if (canvas.width / 2 == radius) {
        growing = false;
    }
    if (radius <= 0) {
        growing = true;
    }
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#00ffff";
    ctx.fill();
    if (growing) {
        radius += 5;
    } else {
        radius -= 5;
    }
}
button.addEventListener('click', ()=>{
    if(!clicked){
        animate();
    }
    clicked=true;
});
stop.addEventListener('click', ()=>{
    if(clicked){
        stopIt();
    }
    clicked=false;
});