function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var points = 13;
	var spread = 10;

	this.draw = function(){
        // Sets stroke weight to value of slider
        strokeWeight(sliderSize());
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
        loadPixels();
	};
}