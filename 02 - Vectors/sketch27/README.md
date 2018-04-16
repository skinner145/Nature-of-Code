#Sketch 27
The mover class remains the same from the last sketch but the sketch itself now changes slightly

An array is created for movers and filled with 20 objects.
```js
var movers = [];

function setup(){
    createCanvas(640, 360);
    for(var i = 0; i < 20; i++){
        movers[i] = new Mover();
    }
}
```

For every mover in the array the update, display and checkEdges methods will be called
```js
function draw() {
    background(51);
    for (var i = 0; i < movers.length; i++){
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
}
```