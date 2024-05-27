function setup() {
  createCanvas(600, 600);
    background("pink");
}

function draw() {

  stroke("blue");
  fill("rgb(251,0,255)");

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
