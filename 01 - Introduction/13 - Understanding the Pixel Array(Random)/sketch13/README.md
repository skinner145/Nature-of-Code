#Understanding the pixel array(gradient)

A variable called bright is delcared giving a random nmuber between 0 - 255. The colour of each pixel is now completely random and is updated every frame. This will give the illusion of a static image often seen on older televisions.
```js
for (var y = 0; y < height; y++){
        for (var x = 0; x < width; x++){
                var index = (x + y * width) * 4
                var bright = random(255);           
                pixels[index + 0] = bright;         
                pixels[index + 1] = bright;         
                pixels[index + 2] = bright;         
                pixels[index + 3] = 255;
            }
    }
```