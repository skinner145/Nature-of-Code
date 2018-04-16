#Sketch 24

The location is set to the centre of the canvas. Acceleration is added and assigned values of 0.03 for x, and 0.04 for y. Accleration is added to velocity and then velocity is limited to 10. The velocity is then added to the location
```js
var Mover = function() {
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.03, 0.04);

     this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity)
    }
```

The ball is then created with the location as its x and y coordinates. It will be red with a grey stroke
```js
    this.display = function() {
        stroke(150);
        strokeWeight(2);
        fill(255, 0, 0);

        ellipse(this.location.x, this.location.y, 40, 40);
    }
```
