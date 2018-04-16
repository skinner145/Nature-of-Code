function setup() {
    createCanvas(320,640);
    background(127);
}

function draw() {
    var xLoc = randomGaussian();            //gets a guassian random number with mean of 0 and standard deviation of 0
    console.log(xLoc);                      

    var sd = 60;                            //standard deviation set to 60
    var mean = width/2;                     //mean set to middle of the screen
    xLoc = (xLoc * sd) + mean;              //xLoc multiplied by the standard deviation plus the mean is the new xLoc

    fill(0, 10);                            //black of colour 10% opacity
    noStroke();                             //strokeless
    ellipse(xLoc, height /2, 16, 16);       //circle drawn at xLoc and half the height
}
