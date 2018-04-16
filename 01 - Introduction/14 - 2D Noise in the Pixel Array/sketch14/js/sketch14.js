var yoff = 1000.0;                  //moment in time offset by an amount

function setup() {
    frameRate(20);
    createCanvas(400, 400);
    pixelDensity(1);
    noiseDetail(10);
}

function draw() {
    loadPixels();

    for (var y = 0; y < height; y++){
        var xoff = 100.0;
        for (var x = 0; x < width; x++){
                var index = (x + y * width) * 4
                var bright = map(noise(xoff, yoff), 0, 1, 0, 255);  //get a noise value for the moment in time and map it to a value
                pixels[index + 0] = bright;
                pixels[index + 1] = bright;
                pixels[index + 2] = bright;
                pixels[index + 3] = 255;

                xoff += 0.02;                   //increment the xoff value, the smaller the number 
                                                //the smaller the difference between values
            }
            yoff += 0.02;
    }
    updatePixels();
}