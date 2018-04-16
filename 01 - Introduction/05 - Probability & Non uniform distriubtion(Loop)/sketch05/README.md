#Probability and Non uniform distribution

In the step function, a variable called r is created and set to a random number between 0 - 1. There is a 20% chance the dot will move to the right, a 10% chance it will move to the left or upwards and a 60% chance it will travel down.

```js
	    this.step = function() {
        var r = random(1);

        if (r < 0.2){
            this.x++;
        }
        else if(r < 0.3){
            this.x--;
        }
        else if(r <0.9){
            this.y++;
        }
        else{
            this.y--;
        }
```