function preload(){
  pin = loadImage("assets/dial1.png");
  v = loadImage("assets/v.jpeg");
  engine = loadSound('assets/engine.mp3');
}

function setup(){
  createCanvas(1000,600);
  noStroke();
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);

  //Sound
  engine.setVolume(0.1);
  engine.playMode('restart');
  engine.play();
  //(Size, X, Y, Sensitivity,Test)
  S1 = new Speedometer(500,320,340,6);
  // S2 = new Speedometer(200,250,450,1);

}

function draw(){


  background(255,39,333);
  //

  fill(255,255,255);
  //
  // image(v,550,430,300,1000);

  // S2.relocate();
  // S2.interact();
  // S2.display();

  // S1.resetLoc();


  S1.relocate2();
  S1.interact();
  S1.display2();

  // S2.relocate();
  // S2.interact();
  // S2.display();

  // rect(0,0,100,100);



}


//constructor
function Speedometer(tempSize,tempLocX,tempLocY,tempSens){

  this.ssize = tempSize;
  this.locX = tempLocX;
  this.locY = tempLocY;
  this.sens = tempSens;
  var dial = 1;


  this.relocate = function()  {

    //Translation
    translate(this.locX,this.locY);
  }

  this.relocate2 = function()  {

    //Translation
    translate(this.locX,this.locY);
  }

  this.interact = function(){

    //Rotation
      rotate(dial);

    //Dial Speed
      if(keyIsPressed === true){
          dial = (dial * 1.1) + this.sens;
          }
      else
          dial = dial -1;

        //Dial Gates

      if(dial >= 220){
            dial = dial - 50;
          }
      if(dial <= 0){
            dial = 0;
          }

      }




        this.display = function(){

      //Dial Needle
      // this.empty = 0;
        image(pin,0,0,this.ssize,this.ssize);

      }

        this.display2 = function(){

      //Dial Needle
      // this.empty = 0;
        image(pin,0,0,this.ssize,this.ssize);

      }

this.resetLoc = function(){
  translate((this.locX = this. locX - this.locX),
            (this.locY = this.locY - this.locY));
}



}










// var starship1;
//
// function setup() {
//   createCanvas(320, 240);
//   starship1 = new Starship(10, 2, 50);
//   starship2 = new Starship(20, 4, 170);
// }
//
// function draw() {
//   background(0);
//   starship1.display();
//   starship1.move();
//   starship1.interact();
//
//   starship2.display();
//   starship2.move();
//   starship2.interact();
// }
//
// function Starship(tempWingspan, tempSpeed, tempXPosition) {
//
//   this.wingspan = tempWingspan;
//   this.speed = tempSpeed;
//   this.xPosition = tempXPosition;
//   this.fillColor = color(random(255), random(255), random(255));
//   var ey = 0;
//
//   this.display = function() {
//     fill(this.fillColor);
//     ellipse(this.xPosition, ey, this.wingspan);
//   };
//
//   this.move = function() {
//     ey = ey + this.speed;
//   };
//
//   this.interact = function() {
//     if(mouseX > this.xPosition) {
//       ey = 0;
//     }
//
//   };
//
// }
