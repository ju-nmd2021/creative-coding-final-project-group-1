// all lines of code inspired by https://learn.ml5js.org/#/reference/handpose
// rather than drawing all the points on the hand i just drawed points on top of the fingers
// then i draw some ellipses whichs x and y position is connected to finger movements

let video;
let handpose;
let predictions = [];
let x= 160;
let y= 100;

let ringFingerTip = [];
let indexFingerTip = [];
let middleFingerTip = [];
let pinkyFingerTip = [];
let thumbFingerTip = [];
let wrist = [];



function setup() {
  createCanvas(400, 350);
  video = createCapture({ video: { width: 400, height: 350 } });
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
  
    //body of the puppet
    rect(x-35, y+46, 70, 120, 20);

    // head of the puppet 
    ellipse(x, y, 100, 95);
    
    //right leg 
    rect(x+13, y+167, 15, 70, 20);
    rect(x+10, y+226, 22, 20, 20);
    
    //left leg 
    rect(x-28, y+167, 15, 70, 20);
    rect(x-32, y+226, 22, 20, 20);
    

    //leg points top
    fill(0);
    ellipse(x+21, y+172, 2, 2);
    ellipse(x-21, y+172, 2, 2);
    //legpoints down
    ellipse(x+21, y+222, 2, 2);
    ellipse(x-21, y+222, 2, 2);
    //foot
    ellipse(x+21, y+232, 2, 2);
    ellipse(x-21, y+232, 2, 2);
    
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


    push();
    rotate(map(ringFingerTip[1], 0, 480, -PI / 2, PI / 2));
    //right arm of the puppet
    fill(255,219,172);
    rect(x+35, y+50, 30, 15, 20);
    rect(x+65, y+50, 40, 15, 20);
    rect(x+105, y+50, 30, 15, 20);
    fill(0);
    //right arm points first part
    ellipse(x+39, y+57, 2, 2);
    ellipse(x+61, y+57, 2, 2);
    //right arm points second part
    ellipse(x+70, y+57, 2, 2);
    ellipse(x+100, y+57, 2, 2);
    //right arm third part
    ellipse(x+110, y+57, 2, 2);
    ellipse(x+130, y+57, 2, 2);
    pop();
    
    push();
    fill(255,219,172);
    //left arm of the puppet
    rect(x-65, y+50, 30, 15, 20);
    rect(x-105, y+50, 40, 15, 20);
    rect(x-135, y+50, 30, 15, 20);
    //left arm third part
    ellipse(x-110, y+57, 2, 2);
    ellipse(x-130, y+57, 2, 2);
    fill(0);
    //left arm points first part
    ellipse(x-39, y+57, 2, 2);
    ellipse(x-61, y+57, 2, 2);
    //left arm points second part
    ellipse(x-70, y+57, 2, 2);
    ellipse(x-100, y+57, 2, 2);
    pop();
  }
}
