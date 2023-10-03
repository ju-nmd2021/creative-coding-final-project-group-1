// all lines of code inspired by https://learn.ml5js.org/#/reference/handpose
// rather than drawing all the points on the hand i just drawed points on top of the fingers
// then i draw some ellipses whichs x and y position is connected to finger movements

let video;
let handpose;
let predictions = [];
let x = 120;
let y = 70;

let ringFingerTip = [];
let indexFingerTip = [];
let middleFingerTip = [];
let pinkyFingerTip = [];
let thumbFingerTip = [];
let wrist = [];



function setup() {
  createCanvas(320, 240);
  video = createCapture({ video: { width: 320, height: 240 } });
  // to hide the second video capture
  video.hide();

  handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", (results) => {
    predictions = results;
  });
}

function modelReady() {
  console.log("Model ready!");
}

class head{
  constructor(x, y) {
  this.x = x;
  this.y = y;
}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
   ellipse(0, 0, 95, 90);
  pop();
} 
}
class rightMiddleArm {
 constructor(x, y) {
  this.x = x;
  this.y = y;
}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
  rect(0, 0, 30, 15, 20);
  pop();
} 
}

class rightLeg {
 constructor(x, y) {
  this.x = x;
  this.y = y;
}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
  rect(0, 0, 15, 70, 20);
  ellipse(8, 70, 22, 20, 20);
  pop();
} 
}

class leftLeg {
 constructor(x, y) {
  this.x = x;
  this.y = y;
}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
  rect(0, 0, 15, 70, 20);
  ellipse(7, 70, 22, 20, 20);
  pop();
} 
}

class rightHand {
  constructor(x, y) {
  this.x = x;
  this.y = y;
}

draw() {
  
  push();
  translate(this.x, this.y);
  rect(0, 0, 30, 15, 20);
  pop();
  
} 
}

class leftHand {
  constructor(x, y) {
  this.x = x;
  this.y = y;
}

draw() {
  push();
  translate(this.x, this.y);
  rect(0,0, 30, 15, 20);
  pop();
  
} 
}

class leftMiddleArm {
 constructor(x, y) {
  this.x = x;
  this.y = y;

}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
  rect(0, 0, 30, 15, 20);
  pop();
} 
}

class rightUpperArm {
constructor(x, y) {
  this.x = x;
  this.y = y;

}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
  
  rect(0, 0, 30, 15, 20);
  pop();
}
}

class leftUpperArm {
constructor(x, y) {
  this.x = x;
  this.y = y;
  //this.rotation = frameCount / 100;

}

draw() {
  //this.rotation = frameCount / 100;
  // draw the arm
  push();
  translate(this.x, this.y);
  //rotate(this.rotation);
  
  rect(0, 0, 30, 15, 20);
  pop();
}
}


class Person {
constructor(x, y) {
  this.x = x;
  this.y = y;
  
  this.head= new head(35,-45);
  
  this.rightUpperArm = new rightUpperArm(70, 5);
  this.rightMiddleArm = new rightMiddleArm(100, 5);
  this.rightHand = new rightHand(130, 5);
  
  this.leftHand = new leftHand(-90, 5);
  this.leftUpperArm = new leftUpperArm(-30, 5);
  this.leftMiddleArm = new leftMiddleArm(-60, 5);
  
  this.rightLeg = new rightLeg(45, 121);
  
  this.leftLeg = new leftLeg(9, 121);
}

draw() {
  push();
  translate(this.x, this.y);
  
  // head of the puppet
  this.head.draw();
  
  //right hand
  this.rightUpperArm.draw();
  this.rightMiddleArm.draw();
  this.rightHand.draw();
  
  //left hand
  this.leftHand.draw();
  this.leftUpperArm.draw();
  this.leftMiddleArm.draw();
  
  // right leg
  this.rightLeg.draw();
  
  this.leftLeg.draw();
  
  // draw body
  rect(0, 0, 70, 120, 20);
  pop();
}
}
//------------------------------------------------end



let person = new Person(120, 100);

function draw() {
  image(video, 0, 0, width, height);

  //catching hand movements inspired by https://learn.ml5js.org/#/reference/handpose
  for (let i = 0; i < predictions.length; i++) {
    // to identify the top points of the finger i checked Hands Keypoints from https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection
    // image for hand keypoints by https://camo.githubusercontent.com/b0f077393b25552492ef5dd7cd9fd13f386e8bb480fa4ed94ce42ede812066a1/68747470733a2f2f6d65646961706970652e6465762f696d616765732f6d6f62696c652f68616e645f6c616e646d61726b732e706e67

    ringFingerTip = predictions[i].landmarks[16];
    indexFingerTip = predictions[i].landmarks[8];
    middleFingerTip = predictions[i].landmarks[12];
    pinkyFingerTip = predictions[i].landmarks[20];
    thumbFingerTip = predictions[i].landmarks[4];
    wrist = predictions[i].landmarks[0];

    fill(0, 255, 0);
    noStroke();
    ellipse(ringFingerTip[0], ringFingerTip[1], 10);
    ellipse(indexFingerTip[0], indexFingerTip[1], 10);
    ellipse(middleFingerTip[0], middleFingerTip[1], 10);
    ellipse(pinkyFingerTip[0], pinkyFingerTip[1], 10);
    ellipse(thumbFingerTip[0], thumbFingerTip[1], 10);
    ellipse(wrist[0], wrist[1], 10);

    fill(255,219,172)
    person.draw();

  }
}
