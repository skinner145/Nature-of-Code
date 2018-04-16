#Sketch30

Variables are created for the angle, angle velocity and angle acceleration.
```js
var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.002;

```

In a push and a pop the location is translated to the centre of the canvas. It is then rotated by the value of the angle. A line is drawn from - 60 from the centre of the canvas on the x axis to + 60. Two circles are drawn at the end of each side of the line.
```js
push();
    translate(width/2, height/2);
    rotate(angle);
    line(-60, 0, 60, 0);
    ellipse(60, 0, 16, 16);
    ellipse(-60, 0 , 16, 16);
pop();
```

The angle velocity is added to acceleration. The angle velocity is then constrained between 0 - 0.1. Angle velocity is then added to the angle which causes it to rotate.
```js
    aVelocity = aVelocity + aAcceleration;
    aVelocity = constrain(aVelocity, 0, 0.1);
    angle = angle + aVelocity;
```