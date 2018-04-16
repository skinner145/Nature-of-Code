var startAngle = 0;
var angleVel = 0.23;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(60);

    startAngle += 0.015;
    var angle = startAngle;

    for (var x = 0; x <= width; x += 24) {
        var y = map(sin(angle), -1, 1, 0, height);

        stroke(0);
        fill(180, 100);
        strokeWeight(2);
        ellipse(x, y, 48, 48);
        
        angle += angleVel;
    }
}