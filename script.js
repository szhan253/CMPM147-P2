/* exported setup, draw */
let seed = 12345;

const skyColor = "#063557";
const hillColor = "#000000";

const sunColor = [240,240,180,300]; // with opacity

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
  createButton("reroll").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background(100);

  noStroke();

  fill(skyColor);
  rect(0, 0, width, height);

  // An example of making something respond to the mouse
  fill(sunColor);
  ellipse(mouseX,pow(abs(mouseX - 400) / 80, 2) * Math.PI + 60,30,30);
  fill(skyColor);
  ellipse(mouseX+mouseX/50 + 5,pow(abs(mouseX - 400) / 80, 2) * Math.PI + 60 ,30,30);
  
  
  // ellipse(mouseX,0,100,100);
  // ellipse(mouseX,0,200,200);

  // An example of drawing an irregular polygon
  fill(hillColor);
  beginShape();
  vertex(0, height);
  const steps = 10;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y =
      height / 5 * 4 - (random() * random() * random() * height) / 2 - height / 50;
    vertex(x, y);
  }
  // vertex(width, height / 2);
  vertex(width, height);
  endShape(CLOSE);

  const stars = 50*random();
  for (let i = 0; i < stars; i++) {
    let x = width * random() + mouseX / 80;
    let y = random(height/2) + pow(abs(mouseX - 400) / 800, 2) * Math.PI;
    let d = width/500 * random(5);
    let r = random(255);
    let g = random(255);
    let b = random(200, 255);
    let c = color(r, g, b);
    drawStar(x, y, d, c);
  }

  function drawStar(x, y, r, starColor){
    fill(starColor);
    ellipse(x, y, r);
  }
}


