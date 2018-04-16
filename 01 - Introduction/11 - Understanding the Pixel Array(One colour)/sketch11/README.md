#Two dimensional noise 

An empty array called walkers is created. Using a for loop 10 walker objects will be created in the walker array

```js
var Walker;
var noOfWalkers;

function setup() {
    createCanvas(1200, 1000);
    noOfWalkers = 10;
    walkers = [];
    for (i = 0; i < noOfWalkers; i++) {
        walkers[i] = new Walker();
    }
    background(127);
}
```

Inside the draw function the step and render function will be called 10 times using the same for loop as seen above in the setup function

```js
function draw() {
    fill(0, 15);
    rect(0, 0, width, height);
    for (i = 0; i < noOfWalkers; i++){
        walkers[i].step();
        walkers[i].render();
    }
}
```

createVector will store 2 variables in tehe position variable. noff is similar to the xOff seen in the previous sketch but two values for x and y are created.

```js
function Walker() {
    this.position = createVector(width/2, height/2);
    this.noff = createVector(random(1000), random(1000));
```



```js
this.render = function() {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), map(noise(this.noff.x), 0, 1, 20, 200))
    }
```