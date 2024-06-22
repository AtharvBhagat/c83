var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var lastX,lastY;
var color="green";
var width_line=1;
var currentX,currentY;
var width_screen=screen.width;
var new_width=width_screen-70;
var height_screen=screen.height;
var new_height=height_screen-300;
if(width_screen<992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",touch_start);
function touch_start(e){
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;

}


canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    
    lastX=currentX;
    lastY=currentY;
}