function setup() {
    createCanvas(320,640);
    background(127);
}

function draw() {
    var xLoc = randomGaussian();    //gets a guassian random number with mean of 0 and standard deviation of 0
    var yLoc = randomGaussian();    //gets a guassian random number with mean of 0 and standard deviation of 0

                                    //if the standard deviations are the same 
                                    //the circles will appear in a circular formation
    var xsd = 100;                  //standard deviation of x set to 100
    var ysd = 20;                   //standard deviation of y set to 20


    var xMean = width/2;            //mean set to middle of the screen
    var yMean = height/2;           //mean set to middle of the screen

    xLoc = (xLoc * xsd) + xMean;    //xLoc multiplied by the standard deviation plus the mean is the new xLoc
    yLoc = (yLoc * ysd) + yMean;    //yLoc multiplied by the standard deviation plus the mean is the new yLoc

    var rColor = 255;               //variable created for the colour

    fill(rColor, 50);               //variable for colour, 50% opacity
    noStroke();                     
    ellipse(xLoc, yLoc, 5, 5);      //circle is createed at xLoc, yLoc
}
