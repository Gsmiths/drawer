var drawHistory = [];
function newhandTool(){
	//set an icon and a name for the object
	this.icon = "assets/newhand.jpg";
	this.name = "newhand";


	this.draw = function(){
		if(mouseIsPressed){
            var point = {
                x: mouseX,
                y: mouseY
            }
            drawHistory.push(point);
        }
        
//        beginShape();
//        noFill();
        for (var i = 0; i< drawHistory.length; i++){
            rect(drawHistory[i].x, drawHistory[i].y,20,20)
        }
//        endShape();
        
        //after the drawing is done save the pixel state
//        loadPixels();
	};
}