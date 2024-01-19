// all lines of code inspired by https://learn.ml5js.org/#/reference/handpose
// rather than drawing all the points on the hand i just drawed points on top of the fingers
// green ellipses x and y position is connected to finger movements
// Background Photo by <a href="https://unsplash.com/@djpaine?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">DJ Paine</a> on <a href="https://unsplash.com/photos/4PxJ_9wEQyI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// for background image upload all code inspired by https://www.youtube.com/watch?v=friYx8xdLOE
// all color detection and fill for the puppets body inspired by https://www.youtube.com/watch?v=Joy4NQPIOxk&t=527s
// mousePressed function inspired by https://www.youtube.com/watch?v=Joy4NQPIOxk&t=527s

let video;
let handpose;
let predictions = [];
let x = 160;
let y = 100;
let scene;
let working = true;


let ringFingerTip = [];
let indexFingerTip = [];
let middleFingerTip = [];
let pinkyFingerTip = [];
let thumbFingerTip = [];
let wrist = [];

// The following one line of code about loadImage(); was added by courtesy of Garrit Schaap
function preload() {
  scene = loadImage("scene.jpg");
}

function setup() {
  createCanvas(800, 350);
  video = createCapture({ video: { width: 400, height: 350 } });
  // to hide the second video capture
  // The following line of code about video.hide(); was added by courtesy of Garrit Schaap
  video.hide();

  handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", (results) => {
    predictions = results;
  });

  // pixel density inspired by https://www.youtube.com/watch?v=nMUMZ5YRxHI&t=1s
  pixelDensity(1);
}

function modelReady() {
  console.log("Model ready!");
  fill(255, 223, 196);
}

// mouse pressed inspired by https://www.youtube.com/watch?v=Joy4NQPIOxk&t=527s
// getting al the pixels from a screen inspired by https://www.youtube.com/watch?v=nMUMZ5YRxHI&t=1s
// rather than selecting a pixel using array i selected a random pixel from a spesific area
// getting pixel from the video rather than an image inspired by https://www.youtube.com/watch?v=rNqaw8LT2ZU&t=206s

function mousePressed() {
  //rect width: 40 height:50
  //let randomPixelX = int(random(180, 220));
  //let randomPixelY = int(random(150, 200));

  let randomPixelX = int(random(125, 275));
  let randomPixelY = int(random(100, 250));

  let index = (randomPixelX + randomPixelY * (width / 2)) * 4; //

  let r = video.pixels[index];
  let g = video.pixels[index + 1];
  let b = video.pixels[index + 2];

  fill(r, g, b);

  console.log(randomPixelX, randomPixelY);
}

// The following line of code for creating a new person was added by courtesy of Garrit Schaap
let person = new Person(0, 155, 0, 0, 0, 0);

function draw() {
  clear();

  video.loadPixels();

  image(scene, 400, 0, 400, 350);
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

  // The following lines of code about distance and person.update was added by courtesy of Garrit Schaap
  let indexDist = dist(
    wrist[0],
    wrist[1],
    indexFingerTip[0],
    indexFingerTip[1]
  );
  let pinkyDist = dist(
    wrist[0],
    wrist[1],
    pinkyFingerTip[0],
    pinkyFingerTip[1]
  );
  let ringDist = dist(wrist[0], wrist[1], ringFingerTip[0], ringFingerTip[1]);
  let middleDist = dist(
    wrist[0],
    wrist[1],
    middleFingerTip[0],
    middleFingerTip[1]
  );

  // while its working the status will be true
  if (working){
    textSize(30);
    text('Make the puppet dance', wrist[0]-50, 155);
    person.update(
      wrist[0],
      155,
      indexDist,
      pinkyDist * 1.2,
      ringDist,
      middleDist
    );
    // inspired by https://p5js.org/reference/#/p5/text

  } else{
    textSize(30);
    text('Im tired! Stop dancing', wrist[0]-50, 155);
    person.update(
      wrist[0],
      155,
      110,
      110,
      110,
      110
    );
  }

  push();
  fill(0, 0, 0, 0);
  rect(125, 100, 150, 150);
  strokeWeight(2);
  pop();

  person.draw();
}

// based on the duration it will give a break

function stopTime(){
  // it stops betwen 10 to 30 seconds randomly and it decides whether it will dance or not
  let duration = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;

  //how many ms it will work or not
  console.log("duration = ", duration);
  setTimeout(()=>{
    // if its working it turns into false, if its false its turning into true
    if(working){
      working = false;
    }else{
      working = true;
    }
    stopTime();
  },duration)

}

stopTime();