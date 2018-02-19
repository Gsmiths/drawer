function EraserTool(){
	
	this.name = "eraserTool";
	this.icon = "assets/eraser.jpg";
    
    this.draw = function(){
        // Uses eraser when mouse is clicked
        if(mouseIsPressed && mouseY < 533 && mouseX > 0){
            fill(255);
            stroke(255);
            // Sets stroke weight to value of slider
            strokeWeight(2);
            rect(mouseX, mouseY, sliderSize(), sliderSize());

        }
    }
 
}
