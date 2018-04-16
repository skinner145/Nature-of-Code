#Mover 04

In the sketch file an array is created for movers. A loop is used to get the mass of each number. It is a random number between 5 - 20.
```js
var movers = [];

function setup(){
    createCanvas(640, 640);
    for(var i = 0; i < 20; i++){
        movers[i] = new Mover(Math.floor(random(5, 20)))
    }
}

```

In the next loop the mass is added to the movers. As well as applying the wind and gravity forces, and the chekEdges, update and display functions.
```js
function draw(){
    background(255);
    for(var i = 0; i < 20; i++){
        var m = movers[i].mass;

        var wind = createVector(0.1, 0);
        var gravity = createVector(0, 0.1 * m);

        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);
        
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }
}
```