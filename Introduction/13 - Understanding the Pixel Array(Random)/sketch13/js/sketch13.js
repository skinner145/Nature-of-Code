function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
}

function draw() {
    loadPixels();

    for (var y = 0; y < height; y++){
        for (var x = 0; x < width; x++){
                var index = (x + y * width) * 4
                var bright = random(255);           //random number between 0 - 255
                pixels[index + 0] = bright;         //will be a random number between 0 - 255
                pixels[index + 1] = bright;         //will be a random number between 0 - 255
                pixels[index + 2] = bright;         //will be a random number between 0 - 255
                pixels[index + 3] = 255;
            }
    }
    updatePixels();
}