#Mover 02

Like the last sketch the wind variable is still here but a variable for gravity is also created. It has 0 for an x value but 0.01 for a y value. This is because gravity would have no effect on the x axis. The two forces are then applied. 
```js
	var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.01)

    background(255);

    mover.applyForce(wind);
    mover.applyForce(gravity);
```

The Mover file remains the same apart from one line of code. The accleration is set back to 0 after every update. This is to prevent exponential acceleration
```js
	this.acceleration.mult(0);
```