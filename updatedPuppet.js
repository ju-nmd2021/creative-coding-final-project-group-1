function setup() {
    createCanvas(400, 400);
  }
  
  class middleArm {
    constructor(x, y) {
      this.x = x;
      this.y = y;
  
    }
  
    draw() {
      //this.rotation = frameCount / 100;
      // draw the arm
      push();
      translate(this.x, this.y);
      //draw middle arm
      rect(0, 0, 30, 15, 20);
      pop();
    }
  }
  
  class upperArm {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      //this.rotation = frameCount / 100;
      this. rightMiddleArm = new middleArm(130, 0);
      this. leftMiddleArm = new middleArm(-30, 0);
    }
  
    draw() {
      //this.rotation = frameCount / 100;
      // draw the arm
      push();
      translate(this.x, this.y);
      //rotate(this.rotation);
  
      rect(0, 0, 30, 15, 20);
      this.rightMiddleArm.draw();
      this.leftMiddleArm.draw();
      pop();
    }
  }
  
  
  class Person {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.leftUpperArm = new upperArm(75, 120);
      this.rightUpperArm = new upperArm(175, 120);
      
  }
  
    draw() {
      push();
      translate(this.x, this.y);
      
      this.leftUpperArm.draw();
      this.rightUpperArm.draw();
      
      
      // draw body
      rect(105, 116, 70, 120, 20);
      pop();
    }
  }
  
  let person = new Person(30, 30);
  
  function draw() {
    background(220);
    person.draw();
  }