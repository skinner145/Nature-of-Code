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
	//array is created to produced different outcomes
	    this.step = function() {
        var probArray = [];
		probArray[1] = 1;
		probArray[2] = 1;
		probArray[3] = 2;
		probArray[4] = 3;
		probArray[5] = 4;
        probArray[6] = 4;
		probArray[7] = 4;

        //index variable is euqual to random number chosen 
		var index = floor(random(probArray.length));
		//r is equal to the value of that array object
        var r = probArray[index];



        if (r === 1){
            this.x += 1;    //if r = 1 dot will move to the right
        }
        else if (r === 2){
            this.x -= 1;    //if r = 2 dot will move to the left
        }
        else if (r === 3){
            this.y += 1;    //if r = 3 dot will move downwards
        }
        else{
            this.y -= 1;    //if r = 4 dot will move upwards
        }
        //dot will move upwards as there are more 4s in the array than any other number
        
        this.x = constrain(this.x,0,width - 1);
        this.y = constrain(this.y,0,height - 2);
    };
    
}