var x = 320;
var y = 180;
var xSpeed = 2.5;
var ySpeed = 2;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);
    
    x = x + xSpeed;
    y = y + ySpeed;
    
    if ((x > width) || (x < 0)){
        xSpeed = xSpeed * -1;
    }
    if ((y > height) || (y < 0)){
        ySpeed = ySpeed * -1;
    }
    
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, y, 48, 48);
}