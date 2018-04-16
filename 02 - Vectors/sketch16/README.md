#Sketch16


Variables created for the position and speed along the x and y axis'
```js
var x = 320;
var y = 180;
var xSpeed = 2.5;
var ySpeed = 2;
```

Inside the draw function the speed is added to the coordinates so every frame the ball will move
```js
function draw() {
    background(51);
    
    x = x + xSpeed;
    y = y + ySpeed;
```

If the ball goes to the edge of the canvas it will appear as if it bounces back. The speed is multiplied by -1 so it heads in the opposite direction
```js
if ((x > width) || (x < 0)){
        xSpeed = xSpeed * -1;
    }
    if ((y > height) || (y < 0)){
        ySpeed = ySpeed * -1;
    }
```

Creating the actual ball
```js
   stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, y, 48, 48);
}
```