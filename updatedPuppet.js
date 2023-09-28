function setup() {
    createCanvas(400, 400);
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
      rect(205, 120, 30, 15, 20);
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
      rect(235, 120, 30, 15, 20);
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
      rect(15, 120, 30, 15, 20);
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
      rect(45, 120, 30, 15, 20);
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
      
      rect(175, 120, 30, 15, 20);
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
      
      rect(75, 120, 30, 15, 20);
      pop();
    }
  }
  
  
  class Person {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rightUpperArm = new rightUpperArm(0, 0);
      this.rightMiddleArm = new rightMiddleArm(0, 0);
      this.rightHand = new rightHand(0, 0);
      
      this.leftHand = new leftHand(0, 0);
      this.leftUpperArm = new leftUpperArm(0, 0);
      this.leftMiddleArm = new leftMiddleArm(0,0);
  }
  
    draw() {
      push();
      translate(this.x, this.y);
      
      //right hand
      this.rightUpperArm.draw();
      this.rightMiddleArm.draw();
      this.rightHand.draw();
      
      this.leftHand.draw();
      this.leftUpperArm.draw();
      this.leftMiddleArm.draw();
      
      // draw body
      rect(105, 116, 70, 120, 20);
      pop();
    }
  }
  
  let person = new Person(0, 0);
  
  function draw() {
    background(220);
    person.draw();
  }