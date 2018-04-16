#Mover 05

In the sketch, a variable called m is declared and set to the movers mass. The gravitys y value is multiplied by the m value.

```js
var m = mover.mass;

    var wind = createVector(0.05, 0);
    var gravity = createVector(0, 0.1 * m);
```

A variable is declared and named c and set to 0.5. The variable normal is set to 1. These are then multiplied to get the value for the frictionMag variable. The friction variable is a multiplication of the mover velocity and -1.

```js
	var c = 0.5;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = p5.Vector.mult(mover.velocity, -1);  
```