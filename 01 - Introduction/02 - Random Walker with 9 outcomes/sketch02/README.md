# Random Walker with 9 outcomes

Variables are created which will be used to change the x, y positions. Their value is determened by the random function. The value will be a floored number between -1 and 2, so the possible values are -1 , 0 or 1. These values will be added to x and y. This could produce 9 outcomes as the x and y position can both be chnaged, or they could both remain the same.

```js
this.step = function () {
        var stepx = floor(random(-1, 2));
        var stepy = floor(random(-1, 2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```