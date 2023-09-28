
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
  video = createCapture({video: {width: 320, height: 240}});
  // to hide the second video capture
  video.hide();
 

  handpose = ml5.handpose(video, modelReady);
  handpose.on('predict', results => {
    predictions = results;    
  
  });
}


function modelReady() {
  console.log("Model ready!");
}


function draw() {

  image(video, 0, 0, width, height); 

  //catching hand movements inspired by https://learn.ml5js.org/#/reference/handpose
  for (let i = 0; i < predictions.length; i++) {

    // to identify the top points of the finger i checked Hands Keypoints from https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection
    // image for hand keypoints by https://camo.githubusercontent.com/b0f077393b25552492ef5dd7cd9fd13f386e8bb480fa4ed94ce42ede812066a1/68747470733a2f2f6d65646961706970652e6465762f696d616765732f6d6f62696c652f68616e645f6c616e646d61726b732e706e67

    ringFingerTip = predictions[i].landmarks[16]
    indexFingerTip = predictions[i].landmarks[8]
    middleFingerTip = predictions[i].landmarks[12]
    pinkyFingerTip = predictions[i].landmarks[20]
    thumbFingerTip = predictions[i].landmarks[4]
    wrist = predictions[i].landmarks[0]

  

    fill(0, 255, 0);                   
    noStroke();                        
    ellipse(ringFingerTip[0], ringFingerTip[1], 10);
    ellipse(indexFingerTip[0], indexFingerTip[1], 10);
    ellipse(middleFingerTip[0], middleFingerTip[1], 10);
    ellipse(pinkyFingerTip[0], pinkyFingerTip[1], 10);
    ellipse(thumbFingerTip[0], thumbFingerTip[1], 10);
    ellipse(wrist[0], wrist[1], 10);

    
  
  
    //ellipse(160, 200, 40);
    //right arm
    //stroke(255,0,0);
    //strokeWeight(5);
    //line(180, 190, 210, (170 - (wrist[1]-ringFingerTip[1])/2));
    //left arm 
    //line(140, 190, 100, (170 - (wrist[1]-indexFingerTip[1])/2));

} 
}
