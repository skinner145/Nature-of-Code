function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(51);

    var period = 120;
    var amplitude = 300;

    var x = amplitude * sin(TWO_PI * frameCount / period);

    stroke(0);
    strokeWeight(2);
    fill(255);
    translate(width / 2, height / 2);
    line(0, 0, x, 0);
    ellipse(x, 0, 48, 48);
}