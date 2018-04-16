#Mover 01

In the sketch file a variable called wind is created and assigned values. This variable is then applied to the mover
```js
 var wind = createVector(0.1, 0.01);

    background(255);

    mover.applyForce(wind);
```

In the mover class the applyForce function is created. It applies the forces to the acceleration of the circle which in this intance will speed acceleration up when the ball is moving to the right or down, but will slow it down if it moves in the opposite directions