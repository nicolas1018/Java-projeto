function setup() {
  createCanvas(600, 600);
    background("rgb(220,7,233)");
}

function draw() {

  stroke("rgb(165,0,255)");
  fill("rgb(255,255,255)");

  // console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
