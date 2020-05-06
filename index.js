//global var//

var firstPar = 0;
var secondPar = 0;
var thirdPar = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {

  if (firstPar == 0 && secondPar == 0 && thirdPar == 0){
    background(0,0,20);
    noStroke();
    pointer();
  }

  if (firstPar == 2){
    mundoAnim();
  }

  if (firstPar == 3){
    profundoAnim();
  }

  if (firstPar == 4){
    meTienesAnim();
  }

  if (secondPar == 2){
    despiertoAnim();
  }

  if (secondPar == 3){
    faltaAnim();
  }

  if (secondPar == 4){
    miMenteAnim();
  }

  if (thirdPar == 1){
    decirteAnim();
  }

  if (thirdPar == 2){
    mentirteAnim();
  }

  if (thirdPar == 3){
    sientoAnim();
  }

  if (thirdPar == 4){
    muertoAnim();
  }

  if (thirdPar == 5){
    quieroAnim();
  }

  if (thirdPar == 6){
    endReading();
    pointer();
  }
}

//my functions//

function setParNumber(f, s, t) {
  firstPar = f;
  secondPar = s;
  thirdPar = t;
}

function mundoAnim() {
  background(0,0,20);
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);
  //little ellipse moon
  push();
    fill(255);
    translate(mouseX, mouseY);
    rotate(frameCount*0.01);
    translate(100, 0);
    ellipse(0, 0, 20);
  pop();
  //sky
  fill(255,255,255, 230);
  ellipse(mouseX, mouseY, 110);
  return;
}

function profundoAnim() {
  background(0,0,20);
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);
  return;
}

function meTienesAnim() {
  background(0,0,20);
  fill(255, 255, 255);
  pointer();
  push();
    fill(0,0,0,180);
    translate(mouseX, mouseY);
    rotate((sin(frameCount*0.01)+0)*10);
    translate(50, 0);
    ellipse(0, 0, 20);
  pop();
  push();
    fill(0,0,0,80);
    translate(mouseX, mouseY);
    rotate((sin(frameCount*0.01)+25)*11.5);
    translate(50, 0);
    ellipse(0, 0, 20);
  pop();
  return;
}

function despiertoAnim() {
  background(0, 0, 20);
  pointer();
  //moving shadows
  fill(255, 150, 0, 60);
  ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.06)+1)*3.05), (sin(frameCount*0.02)+15)*15.1);
  ellipse((mouseX-(sin(frameCount*0.06)+1)*3), (mouseY+(sin(frameCount*0.08)+1)*3), (sin(frameCount*0.02)+15)*15.1);
  //big ellipse
  fill(255, 220, 0);
  ellipse(mouseX, mouseY, (sin(frameCount*0.02)+15)*15);
}

function faltaAnim() {
  background(0, 0, 20);
  pointer();
  //little ellipse pointer
  fill(0);
  ellipse(mouseX, mouseY, 33);
}

function miMenteAnim() {
  background(0, 0, 20);
  //moving shadows
  fill(150, 220, 255, 30);
  ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.06)+1)*3.05), (sin(frameCount*0.02)+19)*15.1);
  ellipse((mouseX-(sin(frameCount*0.06)+1)*3), (mouseY+(sin(frameCount*0.08)+1)*3), (sin(frameCount*0.02)+19)*15.1);
  //big ellipse
  fill(255, 255, 255, 230);
  ellipse(mouseX, mouseY, (sin(frameCount*0.02)+15)*15);
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);
}

function decirteAnim() {
  background(0, 0, 20);
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);
  //moving shadows
  fill(150, 220, 255, 60);
  ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.06)+1)*3.05), (sin(frameCount*0.02)+15)*15.1);
  ellipse((mouseX-(sin(frameCount*0.06)+1)*3), (mouseY+(sin(frameCount*0.08)+1)*3), (sin(frameCount*0.02)+15)*15.1);
  //big ellipse
  fill(255, 255, 255, 230);
  ellipse(mouseX, mouseY, (sin(frameCount*0.02)+15)*15);

  stroke(0, 0, 20);
  strokeWeight(90);
  line(0, mouseY, windowWidth, mouseY);
  noStroke();
}

function mentirteAnim() {
  background(0, 0, 20);
  //moving line
  stroke(255, 255, 255);
  strokeWeight(1);
  for (var i = 0; i < 100; i++) {
    line(mouseX, mouseY, i, 0);
    line(i, windowWidth, mouseX, mouseY);
    line(mouseX, mouseY, i, windowHeight);
    line(i, -windowWidth, mouseX, mouseY);

  }
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);

  noStroke();
}

function sientoAnim() {
  background(0, 0, 20);
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);
  //moving shadows
  fill(255, 150, 150, 60);
  ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.1)+1)*3.05), (sin(frameCount*0.02)+15)*15.1);
  ellipse((mouseX-(sin(frameCount*0.06)+1)*3), (mouseY+(sin(frameCount*0.1)+1)*3), (sin(frameCount*0.02)+15)*15.1);
  //big ellipse
  fill(255, 250, 250, 235);
  ellipse(mouseX, mouseY, (sin(frameCount*0.11)+15)*15);
}

function muertoAnim() {
  background(0, 0, 20);
  //moving line
  stroke(200, 255, 255, 100);
  strokeWeight(2);
  line(mouseX, 0, mouseX, mouseY);
  //little ellipse pointer
  fill(255, 255 ,255);
  ellipse(mouseX, mouseY, 66);
  noStroke();
}

function quieroAnim() {
  document.getElementById("text-container").classList.add('word-hover-js');
  var x = document.getElementsByClassName("word");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.add('word-hover-js');
  }
  background(255, 230, 230);
  //moving shadows
  fill(255, 150, 150, 50);
  ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.06)+1)*3.05), (sin(frameCount*0.02)+15)*15.1);
  ellipse((mouseX-(sin(frameCount*0.06)+1)*3), (mouseY+(sin(frameCount*0.08)+1)*3), (sin(frameCount*0.02)+15)*15.1);
  //big ellipse
  fill(255, 230, 230, 255);
  ellipse(mouseX, mouseY, (sin(frameCount*0.02)+15)*15);
}

function endReading(){
  document.getElementById("text-container").classList.remove('word-hover-js');
  var x = document.getElementsByClassName("word");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('word-hover-js');
  }
  background(0, 0, 20);
}

function pointer(){
  //little ellipse pointer
  fill(255);
  ellipse(mouseX, mouseY, 33);
  //moving shadows
  fill(150, 220, 255, 60);
  ellipse((mouseX+(sin(frameCount*0.05)+1)*3), (mouseY-(sin(frameCount*0.06)+1)*3.05), (sin(frameCount*0.02)+15)*15.1);
  ellipse((mouseX-(sin(frameCount*0.06)+1)*3), (mouseY+(sin(frameCount*0.08)+1)*3), (sin(frameCount*0.02)+15)*15.1);
  //big ellipse
  fill(255, 255, 255, 230);
  ellipse(mouseX, mouseY, (sin(frameCount*0.02)+15)*15);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
