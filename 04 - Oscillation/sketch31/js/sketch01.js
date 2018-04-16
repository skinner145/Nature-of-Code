var mover;
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.002;

function setup() {
	createCanvas(640, 480);
	mover = new Mover(5);
}

function draw() {
	background(245);

	stroke(2);
	fill(100,0,0,40);

	push();
	translate(width/2, height/2);
	rotate(angle);
	line(-60,0,60,0);
	ellipse(60,0,16,16);
	ellipse(-60,0,16,16);
	pop();


	aVelocity = aVelocity + aAcceleration;
	angle = angle + aVelocity;

	var wind = createVector(0.1, 0);
	var gravity = createVector(0, .05);

	mover.applyForce(wind);
	mover.applyForce(gravity);

	mover.update();
}