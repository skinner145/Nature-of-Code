var Walker;

function setup() {
    createCanvas(320,640);
    walker = new Walker;
    background(127);
}

function draw() {
    fill(0, 15);                    //black rectangle with 15% opacity, trail effect
    rect(0, 0, width, height);      
    walker.step();
    walker.render();
}

function Walker() {
    this.x = width/2;
    this.xOff = random(1000);       //random number between 0 - -1000. Repersents the time

    this.render = function() {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40)
    }

    this.step = function() {
        //gets a noise value for the current time(xOff), maps it to between 0 and width,
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        //then increment the time, higher the value the quicker it is
        this.xOff += 0.005;
    }
}