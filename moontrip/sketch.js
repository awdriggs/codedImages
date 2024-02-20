let moon; //declare a variable for use later on.
let calcWidth, calcHeight, stripWidth, stripDisplayWidth;
let strips = []; //empty array to hold thumbnails
let numStrips = 100;

function preload() {
  moon = loadImage('./moon-lg.jpg');
}

function setup() {
  //make the max width the width of the window, make the height relative to the images height with some padding
  calcWidth = windowWidth - 40;
  calcHeight = round(calcWidth / moon.width * moon.height);
  createCanvas(calcWidth, calcHeight + 80)// + 200)
  // print(width, height) //test canvas size

  //set up some variables
  stripDisplayWidth = calcWidth / numStrips 
  // noLoop();
  frameRate(5);
}

function draw() {
  background(0);
   
  //cut the moon into  vertical strips of equal size
  stripWidth = moon.width / numStrips;
   
  let strips = [];

  for(let i = 0; i < numStrips; i++){
    let x = stripWidth * i;
    strips.push(moon.get(x, 0, stripWidth, moon.height));  
    // strips.push(moon.get(x, 0, x + stripWidth, moon.height)); //happy accident, changing size   
    print("strip added");
  }

  print(strips)
  
  //shuffle strips
  // strips.shuffle();
  strips = shuffle(strips);

  stripDisplayWidth = calcWidth / numStrips 
  //original width is 3600, strip width is 36


  //loop over strips, recreating the image
  for(let i = 0; i < strips.length; i++){ 
    let x = i * stripDisplayWidth 
    image(strips[i], x, random(0,40), stripDisplayWidth, calcHeight); 
    // print("strip width", stripWidth);
    // print("display strip width", stripDisplayWidth);
  }
  // image(strips[0], 0, 0); 
  // debugger;
  // image}
}

function keyPressed(){
  if(key == 's'){
    saveCanvas('moontrip', 'jpg');
  } else if(key == 'g'){
    saveGif('moon.gif', 10);
  }
}


