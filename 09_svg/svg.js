/*
Mohammed Jamil
SoftDev2 pd06
K09 -- Connect the Dots
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
    c.setAttribute("r","5");
    c.setAttribute("fill","red");
    pic.appendChild(c);
}
var draw_line =function(x1,y1,x2,y2){
    var l=document.createElementNS(
        "http://www.w3.org/2000/svg","line"
    );
    // coords="M"+x1+" "+y1+"L"+x2+" "+y2+"Z"
    // p.setAttribute("d",coords);
    // p.setAttribute("stroke","black")
    // pic.appendChild(p)
    l.setAttribute("x1",x1)
    l.setAttribute("y1",y1)
    l.setAttribute("x2",x2)
    l.setAttribute("y2",y2)
    l.setAttribute("stroke","black")
    pic.appendChild(l)

}
var draw = function(e){
    //This section is necessary to avoid an issue that occurs with offsetX and Y
    //offsetX and Y take coordinates relative to the circle inside the svg not the svg container
    var rect = pic.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    draw_circle(x,y)

    console.log(e.clientX)
    console.log(x)
    if (prev_x && prev_y){
        draw_line(x,y,prev_x,prev_y)
        draw_circle(prev_x,prev_y)
        draw_circle(x,y)
    }
    prev_x=x
    prev_y=y

}
var clear = function(e){
    prev_x=NaN;
    prev_y=NaN;
    pic.innerHTML=""
}
pic.addEventListener('click', draw);
clearb.addEventListener('click',clear)