#Implementing 2d Noise in the pixel array

Moment in time offset by an amount
```js
var yoff = 1000.0; 
```

Frame rate of the canvas is set to 20, canvas size is set, the density of the pixels is 1 and the noise detail is 10.
```js
function setup() {
    frameRate(20);
    createCanvas(400, 400);
    pixelDensity(1);
    noiseDetail(10);
}
```


A noise value is obtained for the moment in time and is mapped to a value
```js
   for (var y = 0; y < height; y++){
        var xoff = 100.0;
        for (var x = 0; x < width; x++){
                var index = (x + y * width) * 4
                var bright = map(noise(xoff, yoff), 0, 1, 0, 255);  //get a noise value for the moment in time and map it to a value
                pixels[index + 0] = bright;
                pixels[index + 1] = bright;
                pixels[index + 2] = bright;
                pixels[index + 3] = 255;
```

the xoff value is incremented. The smaller the number is the smoother the difference between the values

```js
xoff += 0.02;
```