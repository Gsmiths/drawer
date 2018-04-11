var styleOfText;

//Turns text bold
function boldText() {
    if(styleOfText !== BOLD)
        {
            styleOfText = BOLD;
        }
    else
        {
            styleOfText = NORMAL;
        }
}

//Turns text italic
function italicText() {
    if(styleOfText !== ITALIC)
        {
            styleOfText = ITALIC;
        }
    else
        {
            styleOfText = NORMAL;
        }
}

//Returns text entered in text box
function getText() {
    var myText = document.getElementById("textBox").value
    return myText;
//    return false;
}

function TextTool(){
	
	this.name = "textTool";
	this.icon = "assets/text.jpg";
    
    this.draw = function(){
        // Draws text when mouse is clicked
        if(mouseIsPressed && mouseY < 533 && mouseX > 0){   
            push();
            strokeWeight(0);
            // Sets text size to value of slider
            textSize(sliderSize());
            textStyle(styleOfText);
            textFont(document.getElementById("textPick").value);
            text(getText(), mouseX, mouseY);
            pop();

        }
        //after the drawing is done save the pixel state
        loadPixels();
    }
 
}
