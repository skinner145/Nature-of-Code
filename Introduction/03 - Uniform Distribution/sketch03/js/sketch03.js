//empty array creataed

var randomCounts = [];
var total = 20;

function setup() {
  createCanvas(640,360);

  //for loop that will fill the array with zeros
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(127);

  //a random number will be chosen between 0 - 19
  //picks an object in the array and adds 1 to it
  var index = floor(random(total));
  randomCounts[index]++;

//white rectangle with black stroke of 2px
  stroke(0);
  strokeWeight(2);
  fill(255);

//x position is width divided by the length of the array
  var w = width/randomCounts.length;

//this will loop 20 times as the length of the array is 20
  for (var x = 0; x < randomCounts.length; x++) {

    //x coordinate is number of the loop * the w variable
    //the width is w - 1 so that they will line up perfectly with the width of the canvas
    //y is hieght - the value of the array object so it appears to be drawn from the bottom
    //height is the value in the array
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }
}