/*
Team PaintItBad-Mohammed Jamil,Clara Mohri
SoftDev2 pd 6
K01 -- ...and I want to Paint It Better
2019-01-31  
*/

//initial statement to get all the necessary elements
var canvas=document.getElementById("slate");
var clearb=document.getElementById("clear");
var dotb=document.getElementById("toggle");
var ctx=canvas.getContext("2d");
var box=true;
clearb.addEventListener(
    "click",
    (e)=>{
        //clears the rectangle that starts from 0,0 and ends at canvas.width, canvas.height
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
)
canvas.addEventListener(
    "click",
    (e)=>{
        //getBoundingClientRect allows us to get the location of the canvas
        e.preventDefault();//the preventDefault function prevents the default action that would have happened when this event occurred
        if(box){
            console.log(e);
            console.log(e.offsetY);//offsetY returns the y coordinate relative to the canvas by accounting for where it starts from on the page
            console.log(e.offsetX);//offsetX returns the y coordinate relative to the canvas by accounting for where it starts from on the page
           //pageX and pageY are the cooordinates of the mouse and subtract the edge of the canvas to get the coordinate on the canvas  
           ctx.fillRect(e.offsetX,e.offsetY,10,10);
        }
        else{
            //beginPath is used to start a new path on a canvas to draw a path so the new shape does not connect to other shapes
            ctx.beginPath();
            ctx.ellipse(e.offsetX,e.offsetY,5,5,0, 0, 2 * Math.PI);
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
        box=!box;
    }
)


