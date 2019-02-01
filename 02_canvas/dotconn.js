/*
Team DotConnBubble - Mohammed Jamil, Brian Lee
SoftDev2 pd6
K02 - Connecting the Dots
2019-02-01
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var prev_x;
var prev_y;

document.getElementById("clear").onclick = function()
{
    prev_x=-1;
    prev_y=-1;
    ctx.clearRect(0, 0, c.width, c.height);
}



var draw_circle = function(x, y)
{
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, y, 5, 0, 360);
    ctx.fill();
}

var draw = function(e)
{
    // Get mouse coordinates relative to the canvas
    var x = e.offsetX;
    var y = e.offsetY;
    // console.log(x, y);
    // console.log("prev:", prev_x, prev_y);

    // Initialize path that will be drawn
    if(prev_x>=0&prev_y>=0){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(prev_x, prev_y);
        ctx.stroke();
        draw_circle(prev_x, prev_y);
    }
    draw_circle(x, y);

    prev_x = x;
    prev_y = y;
    // Draw the path created
}

c.addEventListener('click', draw);