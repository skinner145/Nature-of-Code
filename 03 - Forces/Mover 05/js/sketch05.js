var mover;

function setup(){
    createCanvas(640, 640);
    mover = new Mover(Math.floor(random(5, 20)))
}

function draw(){
    background(255);
    
    var m = mover.mass;

    var wind = createVector(0.05, 0);
    var gravity = createVector(0, 0.1 * m);

    var c = 0.5;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = p5.Vector.mult(mover.velocity, -1);    

    mover.applyForce(wind);
    mover.applyForce(gravity);
    
    mover.checkEdges();
    mover.update();
    mover.display();
    
}