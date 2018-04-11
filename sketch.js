//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var userImg;

//function preload(){
//    userImg= loadImage("document.getElementsByTagName('img')[document.getElementsByTagName('img').length - 1].src");
//}

var img_array = document.getElementsByTagName('img');
    
    var last_element = document.getElementsByTagName('img')[document.getElementsByTagName('img').length - 1];

function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");
    

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new newhandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new EraserTool());
    toolbox.addTool(new TextTool());
    toolbox.addTool(new BlurTool());
    background(255);
    
//    image(userImg, 0, 0);
    
// Create image select button 
var fileSelect = createFileInput(fileSelected);

function fileSelected(file){
    var img = createImg(file.data);
//    image(img, 0, 0);
}
    
//    Move image input button to top of page by assigning ID
    var imgUp = document.getElementsByTagName('input')[2];
    document.getElementById("imageOptions").appendChild(imgUp);
    
    
//    var lastPic = document.getElementsByTagName('img')[document.getElementsByTagName('img').length - 1];
//    document.getElementById("content").appendChild(lastPic);
}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){   
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
}


