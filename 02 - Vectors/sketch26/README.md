#Sketch 26

The mouse variable is assigned the x and y values of the mouse. Acceleration is then determined by subtracting the location from the mouse variable. Its magnitude is then set to 0.2. The ball will now accelerate towards the mouse.
```js
var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse,this.location);
        this.acceleration.setMag(0.2);
```