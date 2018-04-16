var Mover = function() {

    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;
    this.topspeed = 6;
    this.xoff = 1000;
    this.yoff = 0;

    this.update = function() {

        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.position);

        dir.normalize();
        dir.mult(0.5);

        this.acceleration = dir;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    }

    this.display = function() {
        var angle = this.velocity.heading();

        stroke(1);
        strokeWeight(2);
        fill(255);

        push();
		rectMode(CENTER);
		translate(this.position.x, this.position.y);
		rotate(angle);
		rect(0, 0, 60, 20);
        pop();
    }

    this.checkEdges = function() {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
}