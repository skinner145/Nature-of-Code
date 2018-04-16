var angle = 0;
var angleVel = 0.1;

function setup() {
    createCanvas(640, 360);
    background(60);
    stroke(180);
    strokeWeight(2);
    noFill();

    beginShape();

        for (var x = 0; x <= width; x += 5) {
            var y = map(sin(angle), -1, 1, 0, height);
            vertex(x, y);
            angle += angleVel;
        }
        
    endShape();
}