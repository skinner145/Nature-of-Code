#Mover 03

In the mover class a variable called mass is declared and set to m. It is added into the function
```js
var Mover = function(m) {
    this.location = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = m;
```

In the display function the ball is created with the width and height set to mass * 10
```js
ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
```

The staticp5.Vector function is used to calculate the acceleration. This is done throught dividing the force by the mass which makes smaller objects fall faster.
```js
this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);
    }
```