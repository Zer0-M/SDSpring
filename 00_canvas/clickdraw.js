/*
Mohammed Jamil
SoftDev2 pd 6
K00 -- I See a Red Door...
2019-01-30  
*/

//initial statement to get all the necessary elements
var canvas=document.getElementById("slate");
var clearb=document.getElementById("clear");
var rectb=document.getElementById("rectmode");
var dotb=document.getElementById("dotmode");
var ctx=canvas.getContext("2d");
var box=true;

clearb.addEventListener(
    "click",
    ()=>{
        //clears the rectangle that starts from 0,0 and ends at canvas.width, canvas.height
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
)
canvas.addEventListener(
    "click",
    (e)=>{
        console.log(e);
        //getBoundingClientRect allows us to get the location of the canvas
        var rect=canvas.getBoundingClientRect();
        if(box){
           //pageX and pageY are the cooordinates of the mouse and subtract the edge of the canvas to get the coordinate on the canvas  
           ctx.fillRect(e.pageX-rect.left,e.pageY-rect.top,10,10);
        }
        else{
            console.log(rect);
            //beginPath is used to draw a shape in this cas the ellipse
            ctx.beginPath();
            ctx.ellipse(e.pageX-rect.left,e.pageY-rect.top,5,5,0, 0, 2 * Math.PI);
            //fill fills in the ellipse as it is not created like the rectangle
            ctx.fill()
            //stroke draws the ellipse
            ctx.stroke();
        }
    }
)
//code below makes button diisappear and changes the mode
dotb.addEventListener(
    "click",
    ()=>{
        box=false;
        rectb.removeAttribute("hidden");
        dotb.setAttribute("hidden",true);
    }
)
rectb.addEventListener(
    "click",
    ()=>{
        box=true;
        dotb.removeAttribute("hidden");
        rectb.setAttribute("hidden",true);
    }
)


