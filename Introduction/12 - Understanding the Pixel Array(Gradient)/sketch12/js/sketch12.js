function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
}

function draw() {
    loadPixels();

//loops through every pixel in the screen
    for (var y = 0; y < height; y++){
        for (var x = 0; x < width; x++){
                var index = (x + y * width) * 4
                pixels[index + 0] = x;          //will increase with every loop
                pixels[index + 1] = 0;
                pixels[index + 2] = y;          //will increase with every loop
                pixels[index + 3] = 255;
            }
    }
    updatePixels();
}