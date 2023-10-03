//---------------------------puppet drawing
class head {
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
  
      rect(0, 0, 75, 15, 20);
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
  
      rect(0, 0, 75, 15, 20);
      pop();
    }
  }
  
  class Person {
    constructor(x, y) {
      this.x = x;
      this.y = y;
  
      this.head = new head(35, -45);
  
      this.rightUpperArm = new rightUpperArm(70, 5);
      this.leftUpperArm = new leftUpperArm(-75, 5);
  
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
  
      //left hand
      this.leftUpperArm.draw();
  
      // right leg
      this.rightLeg.draw();
  
      this.leftLeg.draw();
  
      // draw body
      rect(0, 0, 70, 120, 20);
      pop();
    }
  }
  //---------------------------puppet drawing end