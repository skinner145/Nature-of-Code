#Gaussian Distribution

In the draw function the variable xLoc is created and is given the value of a guasiann number with a mean of 0 and a standard deviation of 1.0
```js
function draw() {
    var xLoc = randomGaussian();
    console.log(xLoc);
```

The standard deviation is defined. in the "sd" variable. a mean is defined as the middle of the canvas in the "mean" variable. The guassian number is then scaled by the standard deviation and the mean

```js
 	var sd = 60;
    var mean = width/2;
    xLoc = (xLoc * sd) + mean;
```
A circle is then created that will be black with the opacity of ten without a stroke. Its y position will be halfway down the screen and its x position is determined by the "xLoc" from above. Most will fall within the standard deviation but some will appear outside the standard deviation

```js
    fill(0, 10);
    noStroke();
    ellipse(xLoc, height /2, 16, 16);
}
```