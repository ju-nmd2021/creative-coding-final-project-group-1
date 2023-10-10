// The following lines of about the person class was added by courtesy of Garrit Schaap 

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
    fill(0);
    ellipse(x-170, y-105, 2, 2);
    ellipse(x-150, y-105, 2, 2);

    //lips
    push();
    beginShape();
    noFill();
    strokeWeight(3);
    curveVertex(-15, 10);
    curveVertex(-10, 10);
    curveVertex(-5, 20);
    curveVertex(+5, 20);
    curveVertex(+15, 10);
    curveVertex(+15, 10);
    endShape();
    pop();
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
    push();
    translate(this.x, this.y);
    //rotate(map(this.rightLegY, 0, 100, HALF_PI, 4 * PI / 3));
    rotate(map(this.rightLegY, 50, 170, PI / 4, -PI / 4));
    //rotate(PI / 3);
    rect(0, 0, 15, 70, 20);
    ellipse(8, 70, 22, 20, 20);
    //points
    ellipse(8, 70, 22, 20, 20);
    ellipse(8, 7, 2, 2);
    ellipse(8, 57, 2, 2);
    ellipse(8, 67, 2, 2);
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
    push();
    translate(this.x, this.y);
    //rotate(this.rotation);
    //rotate(map(this.leftLegY, 0, 100, 0, PI * 0.5 ));
    rotate(map(this.leftLegY, 50, 170,-PI / 4, PI / 4));
    rect(0, 0, 15, 70, 20);
    ellipse(7, 70, 22, 20, 20);
    //points
    ellipse(7, 70, 22, 20, 20);
    ellipse(7, 7, 2, 2);
    ellipse(7, 57, 2, 2);
    ellipse(7, 67, 2, 2);
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

    //console.log("right hand Y: ", this.rightHandY);

    push();
    translate(this.x, this.y);
    //rotate(this.rotation);
    rotate(map(this.rightHandY, 50, 170, PI / 4, -PI / 4));
    rect(0, 0, 75, 15, 20);
    //right arm points 
    ellipse(10, 7, 2, 2);
    ellipse(66, 7, 2, 2);
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

    //console.log("left hand Y: ", this.leftHandY);

    push();
    translate(this.x, this.y);
    rotate(PI);
    rotate(map(this.leftHandY, 50, 170, -PI / 4, PI / 4));
    rect(0, 0, 75, 15, 20);
    //left arm points
    ellipse(10, 7, 2, 2);
    ellipse(66, 7, 2, 2);
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

    this.rightUpperArm = new rightUpperArm(70+400, 5, this.rightHandY);
    this.leftUpperArm = new leftUpperArm(397, 19, this.leftHandY);

    this.rightLeg = new rightLeg(45+400, 124, this.rightLegY);
    this.leftLeg = new leftLeg(9+400, 119, this.leftLegY);
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
    //body points
    ellipse(13+400, 10, 2, 2);
    ellipse(57+400, 10, 2, 2);
    ellipse(13+400, 110, 2, 2);
    ellipse(57+400, 110, 2, 2);

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
