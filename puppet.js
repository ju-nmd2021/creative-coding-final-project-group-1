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
  constructor(x, y, rightLegY) {
    this.x = x;
    this.y = y;
    this.rightLegY = rightLegY;
  }

  draw() {
    // draw the arm
    push();
    translate(this.x, this.y);
    //rotate(map(this.rightLegY, 0, 100, -PI / 2, PI / 0.5));
    rect(0, 0, 15, 70, 20);
    ellipse(8, 70, 22, 20, 20);
    pop();
  }
}

class leftLeg {
  constructor(x, y, leftLegY) {
    this.x = x;
    this.y = y;
    this.leftLegY = leftLegY;
  }

  draw() {
    //this.rotation = frameCount / 100;
    // draw the arm
    push();
    translate(this.x, this.y);
    //rotate(this.rotation);
    rotate(map(this.leftLegY, 0, 100, -PI * 0.5 , PI));
    rect(0, 0, 15, 70, 20);
    ellipse(7, 70, 22, 20, 20);
    pop();
  }
}

class rightUpperArm {
  constructor(x, y, rightHandY) {
    this.x = x;
    this.y = y;
    this.rightHandY = rightHandY;
  }

  draw() {
    // Log
    console.log("right hand Y: ", this.rightHandY);

    //this.rotation = frameCount / 100;
    // draw the arm
    push();
    translate(this.x, this.y);
    //rotate(this.rotation);
    rotate(map(this.rightHandY, 0, 200, -PI / 2, PI ));
    fill(255, 0, 0);
    rect(0, 0, 75, 15, 20);
    pop();
  }
}

class leftUpperArm {
  constructor(x, y, leftHandY) {
    this.x = x;
    this.y = y;
    this.leftHandY = leftHandY;
  }

  draw() {
    // Log
    console.log("left hand Y: ", this.leftHandY);

    //this.rotation = frameCount / 100;
    // draw the arm
    push();
    translate(this.x, this.y);
    rotate(map(this.leftHandY, 0, 200, PI * 1.5, PI * 0.5));
    fill(255, 0, 0);
    rect(0, 0, 75, 15, 20);
    pop();
  }
}

class Person {
  constructor(x, y, leftHandY, rightHandY, rightLegY, leftLegY) {
    this.x = x;
    this.y = y;
    this.leftHandY = leftHandY;
    this.rightHandY = rightHandY;
    this.rightLegY = rightLegY;
    this.leftLegY = leftLegY;

    this.head = new head(35+400, -45);

    this.rightUpperArm = new rightUpperArm(77+400, 5, this.rightHandY);
    this.leftUpperArm = new leftUpperArm(5+400, 10, this.leftHandY);

    this.rightLeg = new rightLeg(45+400, 121, this.rightLegY);
    this.leftLeg = new leftLeg(9+400, 121, this.leftLegY);
  }

  update(x, y, leftHandY, rightHandY, rightLegY, leftLegY){
    this.x = x;
    this.y = y;
    this.leftHandY = leftHandY;
    this.rightHandY = rightHandY;
    this.rightLegY = rightLegY;
    this.leftLegY = leftLegY;

    this.leftUpperArm.leftHandY = this.leftHandY;
    this.rightUpperArm.rightHandY = this.rightHandY;
    this.rightLeg.rightLegY = this.rightLegY;
    this.leftLeg.leftLegY = this.leftLegY;

  }

  draw() {
    push();
    translate(this.x, this.y);


    // draw body
    rect(0 + 400, 0, 70, 120, 20);

    // head of the puppet
    this.head.draw();

    //right hand
    this.rightUpperArm.draw();

    //left hand
    this.leftUpperArm.draw();

    // right leg
    this.rightLeg.draw();

    // left leg
    this.leftLeg.draw();

    pop();
  }
}
