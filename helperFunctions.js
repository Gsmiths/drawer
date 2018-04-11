function HelperFunctions(){
	var undo = 0;
  //Jquery click events. Notice that there is no this. at the
  //start we don't need to do that here because the event will
  //be added to the button and doesn't 'belong' to the object

  //event handler for the clear button event. Clears the screen
  $("#clearButton").on("click", function(){
    background(255, 255, 255);
    //call loadPixels to update the drawing state
    //this is needed for the mirror tool
    loadPixels();
  });

  //event handler for the save image button. saves the canvsa to the
  //local file system.
  $("#saveImageButton").on("click", function(){
    saveCanvas("myPicture", "jpg");
  });
    
    //event handler for the save image button. saves the canvsa to the
  //local file system.
  $("#undoButton").on("click", function(){
    undo = 1;
    console.log(undo);
    undo = 0;
    console.log(undo);
  });
}

//Returns slider value for adjusting brush size
function sliderSize() {
    var slideVal = document.getElementById("myRange").value;
    console.log("Slider value = " && slideVal);
    return slideVal;
}



