var Mover = function(m) {

	this.location = createVector(30,30);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.mass = m;

  
	this.angle = 0;
	this.aVelocity = 0;
	this.aAcceleration = 0.001;

	this.update = function() {
    
	this.velocity.add(this.acceleration);
	this.velocity.limit(10);
	this.location.add(this.velocity);
	this.acceleration.mult(0);

    
    this.aAcceleration = this.velocity.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.05, 0.05);
    this.angle += this.aVelocity;
	}

	this.applyForce = function(force) {
		var f = p5.Vector.div(force,this.mass);
		this.acceleration.add(f);
	}
}