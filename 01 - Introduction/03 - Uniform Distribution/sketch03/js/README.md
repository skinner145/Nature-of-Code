# Uniform Distribution of Numbers

An empty array named "randomCounts" is created as well as a variable for the number of items that will be in the array

```js
var randomCounts = [];
var total = 20;
```
In setup() a for loop is created. It will populate the array with 20 zero's

```js
function setup() {
  createCanvas(640,360);
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}
```
A random number is chosen between 0 - 20 that is floored to 0 - 19. That will choose an object in the array and 1 will be added to it.

```js
function draw() {
  background(127);
  var index = floor(random(total));
  randomCounts[index]++;
```
The rectangles that will be created will be white with a black stroke with the weight of 2px. The rectangles x postion will be the width divided by the length of the array.

```js
  stroke(0);
  strokeWeight(2);
  fill(255);

  var w = width/randomCounts.length;
```

A for loop is used to create the rectangles. The x position comes from the x variable created above, placing each rectangles after the last lining up with the width of the canvas. This variable is also used to create the width of each rectangle, it will be the value of the variable - 1. The recatngles are drawn downwards as the y co-ordinate is positive going downwards. This is why the height value is height - randomCounts[x], it will place it so it looks as if its being drawn from the bottom of the canvas. The hieght of the rectangle is the value from the array

```js
 for (var x = 0; x < randomCounts.length; x++) {
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }
}
```