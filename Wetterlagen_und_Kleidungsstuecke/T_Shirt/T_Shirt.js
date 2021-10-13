function setup() {
  
  //Hntergrund
  
  createCanvas(1000, 500);
  background("lightblue");
 
 //Kleidung 
 
 strokeWeight(10);
 stroke("black");
 
 //linker Arm
 line(450, 140, 400, 190);
 line(400, 190, 430, 220);
 line(430, 220, 450, 200);
  
 //Bauch 
 line(450, 200, 450, 330);
 line(450, 330, 540, 330);
 line(540, 330, 540, 200);
 
 //rechter Arm
 line(540, 200, 560, 220);
 line(560, 220, 590, 190);
 line(590, 190, 540, 140);
 
 //Kopf
 line(450, 140, 465, 140);
 line(540, 140, 525, 140);
 noFill();
 arc(495, 140, 50, 50, 0, HALF_PI);
 arc(495, 140, 50, 50, HALF_PI, PI);
 
}


function draw() {

}
