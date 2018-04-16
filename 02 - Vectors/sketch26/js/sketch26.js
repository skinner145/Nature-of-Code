var mover;

function setup() {
    createCanvas(640, 640);
    mover = new Mover();
}

function draw(){
    background(255);

    mover.checkEdges();
    mover.update();
    mover.display();
}