var canvas=document.getElementById("slate");
var clearb=document.getElementById("clear");
var rectb=document.getElementById("rectmode");
var dotb=document.getElementById("dotmode");
var ctx=canvas.getContext("2d");
var box=true;

clearb.addEventListener(
    "click",
    function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
)
canvas.addEventListener(
    "click",
    function(e){
        console.log(e);
        var rect=canvas.getBoundingClientRect();
        if(box){
           ctx.fillRect(e.pageX-rect.left,e.pageY-rect.top,10,10);
        }
        else{
            console.log(e.pageX-rect.left);
            ctx.beginPath();
            ctx.ellipse(e.pageX-rect.left,e.pageY-rect.top,5,5,0, 0, 2 * Math.PI);
            ctx.fill()
            ctx.stroke();
        }
    }
)
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


