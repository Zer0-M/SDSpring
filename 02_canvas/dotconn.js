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
    prev_x=NaN;
    prev_y=NaN;
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
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(prev_x, prev_y);
    ctx.stroke();

    draw_circle(x, y);
    draw_circle(prev_x, prev_y);

    prev_x = x;
    prev_y = y;
    // Draw the path created
}

c.addEventListener('click', draw);