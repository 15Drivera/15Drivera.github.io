function setup() {
createCanvas(480,120);
}

function draw() {
if(mouseIsPressed) {
  fill(0,26,51);
} else {
  fill(250,0,0);
}
ellipse(mouseX,mouseY,80,80)
}
