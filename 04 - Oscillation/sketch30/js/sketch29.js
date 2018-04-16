var angle = 0;
var aVelocity = 0;
var aAcceleration = .0002;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(220);

	stroke(2);
	fill(100,0,0,40);

	push();
	translate(width/2, height/2);
	rotate(angle);
	line(-60,0,60,0);
	ellipse(60,0,36,36);
	ellipse(-60,0,36,36);
	pop();

	aVelocity = aVelocity + aAcceleration;
	angle = angle + aVelocity;



}