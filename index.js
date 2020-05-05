
var eres1 = document.getElementById('eres-1')

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
// ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.1)+1)*3), (sin(frameCount*0.02)+15)*15);
ellipse(mouseX, mouseY, (sin(frameCount*0.02)+15)*15);
}

function test() {
  print("ok");
  return;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

eres1.addEventListener("mouseOver", test);
