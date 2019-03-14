/*
Mohammed Jamil
SoftDev2 pd06
K10 -- Ask Circles [Change || Die]
2019-03-12 
*/
var pic=document.getElementById("vimage");
var clearb=document.getElementById("clear")
var prev_x;
var prev_y;

var draw_circle =function(x, y){
    var c= document.createElementNS(
        "http://www.w3.org/2000/svg","circle"
    );
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","10");
    c.setAttribute("fill","blue");
    c.addEventListener('click',change)
    pic.appendChild(c);
}
var change = function(e){
    e.preventDefault()
    e.stopPropagation()
    if(this.getAttribute("fill")=="blue"){
        this.setAttribute("fill","green")
    }
    else if(this.getAttribute("fill")=="green"){
        newx=Math.floor( Math.random() * pic.getAttribute("width"))
        newy=Math.floor( Math.random() * pic.getAttribute("height"))
        pic.removeChild(this)
        draw_circle(newx,newy)
    }
}
var draw = function(e){
    //This section is necessary to avoid an issue that occurs with offsetX and Y
    //offsetX and Y take coordinates relative to the circle inside the svg not the svg container
    var rect = pic.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    draw_circle(x,y)

}
var clear = function(e){
    prev_x=NaN;
    prev_y=NaN;
    pic.innerHTML=""
}
pic.addEventListener('click', draw);
clearb.addEventListener('click',clear)