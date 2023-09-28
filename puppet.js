function setup() {
  createCanvas(400, 400);
}

let x = 140;
let y = 70;

function draw() {
  background(220);
  fill(255,219,172)
  
  //body of the puppet
  rect(x-35, y+46, 70, 120, 20);

  // head of the puppet 
  ellipse(x, y, 100, 95);
  
  //right arm of the puppet
  rect(x+35, y+50, 30, 15, 20);
  rect(x+65, y+50, 40, 15, 20);
  rect(x+105, y+50, 30, 15, 20);
  
  //left arm of the puppet
  rect(x-65, y+50, 30, 15, 20);
  rect(x-105, y+50, 40, 15, 20);
  rect(x-135, y+50, 30, 15, 20);
  
  //right leg 
  rect(x+13, y+167, 15, 70, 20);
  rect(x+10, y+226, 22, 20, 20);
  
  //left leg 
  rect(x-28, y+167, 15, 70, 20);
  rect(x-32, y+226, 22, 20, 20);
  
  //eyes big area
  push();
  fill(220);
  ellipse(x-10, y-8, 15, 13);
  ellipse(x+10, y-8, 15, 13);
  pop();
  
  //eyes
  fill(0);
  ellipse(x-10, y-8, 2, 2);
  ellipse(x+10, y-8, 2, 2);
  
  //lips
  push();
  beginShape();
  noFill();
  strokeWeight(3);
  curveVertex(x-15, y+10);
  curveVertex(x-10, y+10);
  curveVertex(x-5, y+20);
  curveVertex(x+5, y+20);
  curveVertex(x+15, y+10);
  curveVertex(x+15, y+10);
  endShape();
  pop();
  
  //body points top
  ellipse(x-23, y+52, 2, 2);
  ellipse(x+23, y+52, 2, 2);
  
  //body points down
  ellipse(x-23, y+160, 2, 2);
  ellipse(x+23, y+160, 2, 2);
  
  //leg points top
  ellipse(x+21, y+172, 2, 2);
  ellipse(x-21, y+172, 2, 2);
  
  //legpoints down
  ellipse(x+21, y+222, 2, 2);
  ellipse(x-21, y+222, 2, 2);
  
  //foot
  ellipse(x+21, y+232, 2, 2);
  ellipse(x-21, y+232, 2, 2);
  
  //right arm points first part
  ellipse(x+39, y+57, 2, 2);
  ellipse(x+61, y+57, 2, 2);
  
  //right arm points second part
  ellipse(x+70, y+57, 2, 2);
  ellipse(x+100, y+57, 2, 2);
  
  //right arm third part
  ellipse(x+110, y+57, 2, 2);
  ellipse(x+130, y+57, 2, 2);
  
  //left arm points first part
  ellipse(x-39, y+57, 2, 2);
  ellipse(x-61, y+57, 2, 2);
  
  //left arm points second part
  ellipse(x-70, y+57, 2, 2);
  ellipse(x-100, y+57, 2, 2);
  
  //right arm third part
  ellipse(x-110, y+57, 2, 2);
  ellipse(x-130, y+57, 2, 2);

}