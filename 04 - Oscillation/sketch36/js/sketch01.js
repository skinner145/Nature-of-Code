var angle = 0;
var aVelocity = 0.04;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(60);

    var amplitude = 300;
	var x = amplitude * sin(angle);
	angle += aVelocity;

    stroke(0);
    strokeWeight(2);
    fill(255);
    translate(width / 2, height / 2);
    line(0, 0, x, 0);
    ellipse(x, 0, 48, 48);
}