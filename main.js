canvas =
 document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


Color = "Red";
Width = 2;


canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("Color").value;
    width = document.getElementById("Width").value;
    radius = document.getElementById("input3").value;
    mouseEvent = mousedown();
}


canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e) {

    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;


    if (MouseEvent == "mousemove") {

        console.log("current position of X and Y coordinates =");
        console.log("x =" + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2 * Math.PI);
        ctx.stroke();


    }

    
}


canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e) {
 mouseEvent = "mouseup";
}


canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}





