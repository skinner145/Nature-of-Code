#Sketch 15

The x and y coordinates are set by the first two variables. A variable for the speed the ball will move at along the x axis is declared and called xSpeed.

```js
var x = 320;
var y = 180;
var xSpeed = 2;
```

The xSpeed is added to the x coordinate in the draw function. Every frame the x coordinate will be different creating the illusion that it is moving. The if statement will stop the ball from travelling out of the canvas. Once it reaches the end of the canvas the xSpeed is multiplied by -1 so it will travel in the opposite direction. The x variable is the x coordinate when creating the ellipse, which is how it moves.

```js
function draw() {
    background(51);
    
    x = x + xSpeed;
    
    if ((x > width) || (x < 0)){
        xSpeed = xSpeed * -1;
    }
    
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(x, 180, 48, 48);
}
```