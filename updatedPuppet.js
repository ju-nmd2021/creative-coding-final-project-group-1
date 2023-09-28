function setup() {
    createCanvas(400, 400);
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
      //(140-105, 70-115);
      
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
  
  let person = new Person(120, 100);
  
  function draw() {
    background(220);
    fill(255,219,172)
    person.draw();
  }
  
