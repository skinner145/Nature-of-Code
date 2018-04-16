#Probability and Non uniform distribution

An array named probArray is created inside the step function. It can give 1 - 4 as an outcome

```js
  this.step = function() {
        var probArray = [];
		probArray[1] = 1;
		probArray[2] = 1;
		probArray[3] = 2;
		probArray[4] = 3;
		probArray[5] = 4;
        probArray[6] = 4;
		probArray[7] = 4;
```

The variable r is created and its value will be whatever is the outcome of the array. Whatever r is equaled to will cause the dot to move in a certain direction. It is more probable that the dot will travel upwards as it is most likely the outcome will be 4 and 4 is set to decrease the y value by 1

```js
var index = floor(random(probArray.length));
		var r = probArray[index];

        if (r === 1){
            this.x += 1;
        }
        else if (r === 2){
            this.x -= 1;
        }
        else if (r === 3){
            this.y += 1;
        }
        else if (r === 4){
            this.y -= 1;
        }
```