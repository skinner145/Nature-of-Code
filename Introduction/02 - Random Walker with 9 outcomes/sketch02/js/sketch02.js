var walker;

function setup() {
    createCanvas(320, 640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}

function Walker() {
    this.x = width / 2;
    this.y = height / 2;

    this.render = function () {
        stroke(0);
        point(this.x, this.y);
    }

    this.step = function () {
        //variables are created for the movement of x and y
        //the value can be -1 , 0 or 1 due to the random number being floored
        var stepx = floor(random(-1, 2));   
        var stepy = floor(random(-1, 2));

        //the random floored number will be added or taken away from the x and y value
        //bot the x and y can change or stay the same so there are 9 seperate outcomes
        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

}