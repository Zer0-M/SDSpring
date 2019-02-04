var canvas = document.getElementById('canvas')
var button = document.getElementById('start')
var stop = document.getElementById('stop')
var ctx = canvas.getContext('2d')

var requestID;
var radius=0;
var growing = true;

function clear() {
    if (canvas.width / 2 == radius) {
        growing = false
    }
    if (radius <= 0) {
        growing = true
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (growing) {
        radius += 5
    }else{
        radius -= 5
    }
    return true
}

function animate() {
    clear()
    make_circle()
    requestID=requestAnimationFrame(animate)
}

function stopIt(){
    cancelAnimationFrame(requestID);
}


function make_circle() {
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fillStyle="#00ffff"
    ctx.fill()
}
button.addEventListener('click',animate)
stop.addEventListener('click',stopIt)