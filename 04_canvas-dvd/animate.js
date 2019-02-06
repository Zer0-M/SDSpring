/*
Team Imaginamation - Mohammed Jamil, Ahnaf Hasan
SoftDev2 pd6
K03 - They lock us in the tower whenever we get caught ...which is often
2019-02-04
*/

var canvas = document.getElementById('playground');
var button = document.getElementById('circle');
var dvdb=document.getElementById('dvd');
var stop = document.getElementById('stop');
var ctx = canvas.getContext('2d');

var requestID;
var radius = 0;
var growing = true;

function clear() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    return true;
}

function animate(e) {
    window.cancelAnimationFrame(requestID);
    clear();
    make_circle();
    requestID = window.requestAnimationFrame(animate);
}

function stopIt() {
    window.cancelAnimationFrame(requestID);
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
var rectWidth =100;
var rectHeight=50;

var rectX=Math.floor(Math.random() * (canvas.width-rectWidth));
var rectY=Math.floor(Math.random() * (canvas.height-rectHeight));
var velX=1
var velY=1
function dvdSetup(){
    window.cancelAnimationFrame(requestID)
    var img = new Image();
    img.onload=function(){
        ctx.drawImage(img,rectX,rectY,rectWidth,rectHeight);
    };

    if(rectX+velX>canvas.width||rectX+velX<=0){
        velX=-velX;
    }
    if(rectY+velY>canvas.height||rectY+velY<=0){
        velY=-velY;
    }
    img.src="logo_dvd.jpg";
    rectX+=velX;
    rectY+=velY;
    var dvdLogo =function(){
        requestID=window.requestAnimationFrame(dvd);
    }

    
}

button.addEventListener('click', animate);
stop.addEventListener('click', stopIt);
dvdb.addEventListener('click',dvdSetup);