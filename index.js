
var eres1 = document.getElementById('eres-1')

eres1.addEventListener("mouseOver", test);

function setup(){
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noStroke();
}

function draw() {
//mouse
background(0,0,20);
fill(255);
ellipse(mouseX, mouseY, 33);
fill(255, 255, 255, 240);
}

function test() {
  print("ok");
  return;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
