#Sketch19

A variable is created for the x and y of the mouse, as well as the centre of the canvas. the value of the centre is then subtracted from the mouse.
```js
    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(center);
```

The position is then translated to the centre of the screen, and given the stroke weight of 2 and will be white in colour. The line is then drawn from 0,0(which is actually the centre of the canvas because of the translate that occured) and to the value of the vectorLine.
```js
translate(width / 2, height /2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);
```