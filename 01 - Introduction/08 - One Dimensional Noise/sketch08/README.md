#One dimensional noise

Inside the draw function a black rectangle with the opacity of 15% will be created every frame. This is where the trail effect comes from
```js
function draw() {
    fill(0, 15);
    rect(0, 0, width, height);
    walker.step();
    walker.render();
}
```

The x position will start in the middle of the canvas. The "xOff" is a random number between 0 and 1000 that repersents time. If the noise function was called on this value it would return a value betweeen 0 and 1. 
```js
function Walker() {
    this.x = width/2;
    this.xOff = random(1000);
```

The render function will set the colour of the circle to red with no stroke and the opacity will be set to 50%.

```js
    this.render = function() {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40)
    }
```
The step function will get a noise value for the current moment in time, "xOff", and will map it between 0 and width. It is then incremented time(xOff). The higher the xOff value is the faster the circle will move

```js
this.step = function() {
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.xOff += 0.005;
    }
}
```
