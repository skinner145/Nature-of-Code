#Guassian distribution(2 dimensions)

To add another dimension there are twice as many variable as the previous sketch to accommodate the y co-ordinates. A guassian random number with a mean of 0 and deviation of 1.0 is given to the "xLoc" and "yLoc" variables. The standard deviation is set differently for x and y, if the standard deviation is the same the circles will appear in a circle formation for the most part. With these standard devitations a line will form along the x axis made up of the circles. The mean for x is half the width and the mean for y is half the height.

```js
function draw() {
    var xLoc = randomGaussian();
    var yLoc = randomGaussian();


    var xsd = 100;
    var ysd = 20; 

    var xMean = width/2;
    var yMean = height/2;
```

 The "xLoc" and "yLoc" are then determined by their originaly value multiplied by their standard deviation and added to their mean

```js
    xLoc = (xLoc * xsd) + xMean;
    yLoc = (yLoc * ysd) + yMean;
```
A variable is created for the colour of the circles. The fill will be this variable, which will be white, with the opacity of 50. The circle is then placed at whatever the "xLoc" and "yLoc" have been determined as.

```js
var rColor = 255;

    fill(rColor, 50);
    noStroke();
    ellipse(xLoc, yLoc, 5, 5);
}
```