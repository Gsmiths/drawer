function EraserTool(){

	this.name = "eraserTool";
	this.icon = "assets/eraser.jpg";

    this.draw = function(){
        var myArray = [];
        // Uses eraser when mouse is clicked
        if(mouseIsPressed && mouseY < 533 && mouseX > 0){
            push();
            fill(255);
            stroke(255);
            strokeWeight(2);
            // Sets stroke weight to value of slider
            rect(mouseX, mouseY, sliderSize(), sliderSize());
            pop();

        }
        //after the drawing is done save the pixel state
        loadPixels();
    }

}
