#Understanding the pixel array(gradient)

Looping through every pixel on the canvas. The further the pixels get on the x axis the more red they will be. The further along the y axis they go they will turn more blue. The middle of the canvas will be a blend of the two resulting in purple.
```js
for (var y = 0; y < height; y++){
        for (var x = 0; x < width; x++){
                var index = (x + y * width) * 4
                pixels[index + 0] = x;         
                pixels[index + 1] = 0;
                pixels[index + 2] = y;          
                pixels[index + 3] = 255;
            }
    }
```