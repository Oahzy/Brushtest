let angle = 0;
let size = 0;
let huee = 200;
let satur = 200;
let light = 200;
let c;
let op =0.8;

function setup() {
  createCanvas(710, 400);
  background(220);
  noStroke();
  fill(0, 102);
}



function keyPressed() {
  if (keyIsDown(49)) {
    size +=1;
  } 
  else if (keyIsDown(50)) {
    size -=1;
  }
  else if (keyIsDown(51)) {
    huee += 10;
  }
  else if (keyIsDown(52)) {
    huee -= 10;
  }
  else if (keyIsDown(53)) {
    satur += 10;
    op += 0.1;
  }
  
  else if (keyIsDown(54)) {
    satur -= 10;
    op -= 0.1;
  }
  
  
  else if (keyIsDown(55)) {
    light += 10;
  }
  else if (keyIsDown(56)) {
    light -= 10;
  }
}


function draw() {
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 5.0;
    for (let a = 0; a < 360; a += 15) {
      let xoff = sin(radians(a)) * val;
      let yoff = cos(radians(a)) * val;
      
      
      colorMode(RGB, 255, 255, 255, 1)
      c = color(huee, satur, light, op);
      fill(c);
      ellipse(mouseX + xoff, mouseY + yoff, size, size);

    }

  }
}
