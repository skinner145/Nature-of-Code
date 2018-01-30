function setup() {
    createCanvas(400, 400);
    pixelDensity(1);                //pixel density set to 1
}

function draw() {
    loadPixels();                   //sstarts with a loadPixels function

    //will loop through every pixel in the canvas
    for (var y = 0; y < height; y++){           
        for (var x = 0; x < width; x++){        
                var index = (x + y * width) * 4 
                pixels[index + 0] = 0;
                pixels[index + 1] = 255;        //will make the canvas green
                pixels[index + 2] = 0;
                pixels[index + 3] = 255;
            }
    }
    updatePixels();
}