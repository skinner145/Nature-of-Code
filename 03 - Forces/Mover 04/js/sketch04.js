var movers = [];

function setup(){
    createCanvas(640, 640);
    for(var i = 0; i < 20; i++){
        movers[i] = new Mover(Math.floor(random(5, 20)))
    }
}

function draw(){
    background(255);
    for(var i = 0; i < 20; i++){
        var m = movers[i].mass;

        var wind = createVector(0.1, 0);
        var gravity = createVector(0, 0.1 * m);

        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);
        
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }
}