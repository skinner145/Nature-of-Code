#Sketch31

In the sketch the constrain on the rotation is removed. The wind and gravity forces are also applied again
```js
aVelocity = aVelocity + aAcceleration;
	angle = angle + aVelocity;

	var wind = createVector(0.1, 0);
	var gravity = createVector(0, .05);

	mover.applyForce(wind);
	mover.applyForce(gravity);
```

In the mover class the angle acceleration is set to the velocity of x. The angle acceleration is then added to the angle velocity. The angle velocity is then constrained between -0.5 and 0.5. Angle velocity is then added to the angle
```js
	this.aAcceleration = this.velocity.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.05, 0.05);
    this.angle += this.aVelocity;
```