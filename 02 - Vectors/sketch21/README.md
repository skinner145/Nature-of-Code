#Sketch 21

This will draw a line along the top of the canvas in white. The length of the line is determined by the magnitude of the vectorLine between the centre and the mouse
```js
var m = vectorLine.mag();
    fill(255); 
    stroke(0);
    rect(0, 0, m, 10);
```