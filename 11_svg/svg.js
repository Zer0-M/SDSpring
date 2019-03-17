/*
Mohammed Jamil
SoftDev2 pd06
K11 -- Ask Circles [Change || Die] …While On The Go
2019-03-18 
*/
var pic=document.getElementById("vimage");
var clearb=document.getElementById("clear");
var moveb=document.getElementById("move");
var specialb=document.getElementById("special");
var prev_x;
var prev_y;
var requestID;
function animate(e) {
    window.cancelAnimationFrame(requestID);
    childnodes=pic.children
    for(var i=0;i<pic.childElementCount;i++){
        move(pic.children[i]);
    }
    requestID = window.requestAnimationFrame(animate);
}
function special(){
    window.cancelAnimationFrame(requestID);
    childnodes=pic.children
    for(var i=0;i<pic.childElementCount;i++){
        specialMove(childnodes[i])
    }
    requestID = window.requestAnimationFrame(special);
}
var draw_circle =function(x, y){
    var c= document.createElementNS(
        "http://www.w3.org/2000/svg","circle"
    );
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("vel_x",5);
    c.setAttribute("vel_y",5);
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
var move = function(node){
    var vel_x=parseInt(node.getAttribute("vel_x"))
    var vel_y=parseInt(node.getAttribute("vel_y"))
    var oldx=parseInt(node.getAttribute("cx"))
    var oldy=parseInt(node.getAttribute("cy"))
    if(oldx+10+vel_x>500||oldx-10+vel_x<0){
        node.setAttribute("vel_x",-vel_x);
    }
    if(oldy+10+vel_y>500||oldy-10+vel_y<0){
        node.setAttribute("vel_y",-vel_y)
    }
    node.setAttribute("cx",oldx+vel_x);
    node.setAttribute("cy",oldy+vel_y);
}
var specialMove = function(node){
    var oldx=parseInt(node.getAttribute("cx"))
    var oldy=parseInt(node.getAttribute("cy"))
    var angle=Math.atan2((oldy-250),(oldx-250))*(180/Math.PI);
    var radius=Math.sqrt(Math.pow(oldx-250,2)+Math.pow(oldy-250,2));
    angle+=3
    var newX  = radius * Math.cos(angle * (Math.PI/180))+250;
    var newY = radius * Math.sin(angle * (Math.PI/180))+250;
    if (newX >500){
        newX=490;
    }
    else if(newX<0){
        newX=10;
    }
    if (newY>500){
        newY=490;
    }
    if (newY<0){
        newY=10;
    }
    node.setAttribute("cx",newX);
    node.setAttribute("cy",newY);
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
    window.cancelAnimationFrame(requestID)
    pic.innerHTML=""
}
pic.addEventListener('click', draw);
clearb.addEventListener('click',clear);
moveb.addEventListener('click',animate);
specialb.addEventListener('click',special)