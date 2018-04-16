# Random Walker with 4 outcomes

A walker class is created which will create walker objects. A random
number will be selected every time the step function is called on this object,
from this it will produce an outcome.

The script starts with two functions, setup() and draw(). The setup() will happen once
and the draw() will happen with every frame.

```js
var walker;

function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}
```

Variables are set up for x and y and values will be declared for them. Two functions
will be added to the object. "this.render" will draw a dot at the x,y co-ordinates

```js
function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

The step function will produce a number between 0 and 4 and it will then be floored, the result will then be 0, 1, 2 or 3. Each of these possible outcomes will produce a different outcome. The if statements will change the x or y co-ordinates and when the next frame is drawn, the render function will update their position. The dot is constrained so it will always remain in the canvas
```js
   this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
        
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
    
}
```
