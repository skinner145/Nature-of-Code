#Sketch23
The Mover is created. THe location is set to a random place in tha canvas and the x velocity is 10, the y velocity is 5. the velocity is added to the location.
```js
var Mover = function() {
	this.location = createVector(random(width), random(height));
	this.velocity = createVector(10, 5);
	
	this.update = function(){
		this.location.add(this.velocity);
	}
```

Stroke is set to grey and the weight of it is 2, this fill is red and the circle is then created using the location for the x and y coordinates
```js
	this.display = function() {
		stroke(150);
		strokeWeight(2);
		fill(255, 0, 0);
		
		ellipse(this.location.x, this.location.y, 40, 40);
	}
```
	
If the ball goes to the edge of the screen it will bounce back the other way.
```js
this.checkEdges = function(){
		if (this.location.x > width || this.location.x < 0){
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0){
			this.velocity.y = this.velocity.y * -1;
		}
```