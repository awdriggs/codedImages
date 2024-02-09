let moon; //declare a variable for use later on.
let calcWidth, calcHeight;
let strips = []; //empty array to hold thumbnails

function preload() {
  moon = loadImage('./moon-lg.jpg');
}

function setup() {
  //make the max width the width of the window, make the height relative to the images height with some padding
  calcWidth = windowWidth - 40;
  calcHeight = round(calcWidth / moon.width * moon.height);
  createCanvas(calcWidth, calcHeight)// + 200)
  // print(width, height) //test canvas size

  noLoop();
}

function draw() {
  background(0);
   
  //cut the moon into  vertical strips of equal size
  let numStrips = 100;
  stripWidth = moon.width / numStrips
  
  let strips = [];

  for(let i = 0; i < numStrips; i++){
    let x = stripWidth * i;
    strips.push(moon.get(x, 0, x + stripWidth, moon.height));  
  }

  print(strips)
   
  image(strips[0], 0, 0, calcWidth / numStrips, calcHeight); 
  // image}
}

function keyPressed(){
  if(key == 'r'){
    saveCanvas('moontrip', 'jpg');
  }
}


