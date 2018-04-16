//creates a variable called walker
var walker;

//setup function will be called once,
//creates the canvas sets the background and creataes a new Walker
function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();
}

//draw function is called every frame
//it will call the render and step function
function draw() {
    walker.render();
    walker.step();
}

//walker function
function Walker() {
    this.x = width/2;           //x is set to the middle of the screeen
    this.y = height/2;          //y is set to the middle of the screen

    
    this.render = function() {
        stroke(0);              
        point(this.x,this.y);   //creates the dot at the x and y coordinates
    }
	
	    this.step = function() {
        var choice = floor(random(4));      //prodcuces a random number and floors it, 0, 1, 2 or 3
        if (choice === 0) {
            this.x++;                   //if number is 0, dot will move to the right
        } else if (choice === 1) {
            this.x--;                   //if number is 1, dot will move to the left
        } else if (choice === 2) {
            this.y++;                   //if number is 2, dot will move down
        } else {
            this.y--;                   //if number is 3, dot will move up
        }
        

        //stops the dot from going off the screen
        this.x = constrain(this.x,0,width);     
        this.y = constrain(this.y,0,height);
    }
    
}