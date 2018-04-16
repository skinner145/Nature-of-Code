x = 0;
y = 0;

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
}

function draw() {
    loadPixels();


        var index = (x + y * width) * 4
        pixels[index + 0] = 255;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 255;

    updatePixels();
}