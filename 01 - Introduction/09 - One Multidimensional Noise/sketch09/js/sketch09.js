var Walker;
var noOfWalkers;

function setup() {
    createCanvas(1200, 1000);
    noOfWalkers = 10;

    //empty array created, loops to create 10 walker objects
    walkers = [];
    for (i = 0; i < noOfWalkers; i++) {
        walkers[i] = new Walker();
    }
    background(127);
}

function draw() {
    fill(0, 15);
    rect(0, 0, width, height);

    //loops 10 times
    for (i = 0; i < noOfWalkers; i++){
        walkers[i].step();
        walkers[i].render();
    }
}

function Walker() {
    //two values stored in a variable
    this.position = createVector(width/2, height/2);
    this.noff = createVector(random(1000), random(1000));

//drawing circles at the given coordinates
    this.render = function() {
        noStroke();
        fill(255, 45, 0, 50);
        //maps the value for the current moment in time to between 20 - 200
        ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), map(noise(this.noff.x), 0, 1, 20, 200))
    }

    this.step = function() {
        //constrains the circles
        this.position.x = map(noise(this.noff.x), 0, 1, 0 - 200, width + 200);
        this.position.y = map(noise(this.noff.y), 0, 1, 0 - 200, height + 200);

        //how fast the circles move
        this.noff.add(0.005, 0.005);
    }
}