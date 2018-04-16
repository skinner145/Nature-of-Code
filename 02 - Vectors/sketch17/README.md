#Sketch 17

Variable are created for the position and velocity of the ball. These are then assigned values through a vector. This replaces the need for variables for x, y, xSpeed, ySpeed.
```js
var position;
var velocity;

function setup() {
    createCanvas(640, 360);
    position = createVector(100, 100);
    velocity = createVector(2, 2);
}
```

To move the ball along the screen the value of the velocity is added to the value of the position
``js
function draw() {
    background(51);
    
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;
```

If the ball goes to the edge of the screen it will bounce back. This happens because the velocity is multiplied by -1 making it come back the opposite direction.
```js
 if((position.x > width) || (position.x < 0)){
        velocity.x = velocity.x * -1;
    }
    
    if((position.y > height) || (position.y < 0)){
        velocity.y = velocity.y * -1;
    }
```