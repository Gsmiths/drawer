function BackgroundTool(){
    this.name = "backgroundTool";
    this.icon = "assets/background.jpg";

    this.draw = function(){

        if(mouseIsPressed && mouseY < 533 && mouseX > 0){


            loadPixel();
            for(var j = 0; j < height; j++){
                for(var i = 0; i < width; i++){

                    var currPixel = (i + j * width) * 4 ;

                    if(pixels[currPixel] == 255 && pixels[currPixel + 1] == 255 && pixels[currPixel + 2] == 255){

                    }
                }
            }
        }
    }
}
