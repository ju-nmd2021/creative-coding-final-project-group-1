// all lines of code inspired by https://learn.ml5js.org/#/reference/handpose
// rather than drawing all the points on the hand i just drawed points on top of the fingers
// green ellipses x and y position is connected to finger movements
// Background Photo by <a href="https://unsplash.com/@djpaine?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">DJ Paine</a> on <a href="https://unsplash.com/photos/4PxJ_9wEQyI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// for background image upload all code inspired by https://www.youtube.com/watch?v=friYx8xdLOE

let video;
let handpose;
let predictions = [];
let x = 160;
let y = 100;
let scene;


let ringFingerTip = [];
let indexFingerTip = [];
let middleFingerTip = [];
let pinkyFingerTip = [];
let thumbFingerTip = [];
let wrist = [];

function preload(){
  scene = createImg('scene.jpg')
}

function setup() {
  createCanvas(800, 350);
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

let person = new Person(0, 155, 0, 0, 0, 0);

function draw() {
  clear();
  image(video, 0, 0, 400, 350);

  //scene.position(404, 8);
  //scene.size(403, 350);


  //catching hand movements inspired by https://learn.ml5js.org/#/reference/handpose
  for (let i = 0; i < predictions.length; i++) {
    // to identify the top points of the finger i checked Hands Keypoints from https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection
    // image for hand keypoints by https://camo.githubusercontent.com/b0f077393b25552492ef5dd7cd9fd13f386e8bb480fa4ed94ce42ede812066a1/68747470733a2f2f6d65646961706970652e6465762f696d616765732f6d6f62696c652f68616e645f6c616e646d61726b732e706e67
    push();
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
    pop();
  }

  fill(255, 219, 172);
  //movements of the puppet               leftHandY,                      rightHandY                      righLegY                       leftLegY

  let indexDist = dist(wrist[0], wrist[1], indexFingerTip[0], indexFingerTip[1]);
  let pinkyDist = dist(wrist[0], wrist[1], pinkyFingerTip[0], pinkyFingerTip[1]);
  let ringDist = dist(wrist[0], wrist[1], ringFingerTip[0], ringFingerTip[1]);
  let middleDist = dist(wrist[0], wrist[1], middleFingerTip[0], middleFingerTip[1]);

  person.update(
    wrist[0],
    155,
    indexDist,
    pinkyDist * 1.2,
    ringDist,
    middleDist
  );
  person.draw();


}
