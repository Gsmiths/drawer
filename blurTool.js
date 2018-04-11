function BlurTool(){
	
	this.name = "blurTool";
	this.icon = "assets/eraser.jpg";
    
    this.draw = function(){
        var myArray = [];
        // Use blur when mouse is clicked
        if(mouseIsPressed && mouseY < 533 && mouseX > 0){   
            push();
            fill(0,0,0,0);
            stroke(0,0,0,0);
            strokeWeight(2);
            // Sets stroke weight to value of slider
            rect(mouseX, mouseY, sliderSize(), sliderSize());
            filter(BLUR, 3);
            pop();

        }
        //after the drawing is done save the pixel state
        loadPixels();
    }
 
}
