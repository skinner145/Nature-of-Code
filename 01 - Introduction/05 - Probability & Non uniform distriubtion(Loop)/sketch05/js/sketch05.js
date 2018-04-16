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
function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
	
	    this.step = function() {
        var r = random(1);              //random number between 0 - 1

        if (r < 0.2){                   //20% chance
            this.x++;                   //dot will move right
        }
        else if(r < 0.3){               //10% chance
            this.x--;                   //dot will move left
        }
        else if(r <0.9){                //60% chance
            this.y++;                   //dot will move down
        }
        else{                           //10% chance
            this.y--;                   //dot will move up
        }



        this.x = constrain(this.x,0,width - 1);
        this.y = constrain(this.y,0,height - 2);
    };
    
}