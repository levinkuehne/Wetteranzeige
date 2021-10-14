function setup() {
  
  //Hntergrund
  
  createCanvas(1000, 500);
  background("lightblue");
 
 //Kleidung 
 
 strokeWeight(10);
 stroke("black");
 
 //linker Arm
 line(750, 140, 700, 190);
 line(700, 190, 700, 300);
 line(700, 300, 730, 300);
 line(730, 300, 730, 220);
 line(730, 220, 750, 200);
  
 //Bauch 
 line(750, 200, 750, 330);
 line(750, 330, 840, 330);
 line(840, 330, 840, 200);
 
 //rechter Arm
 line(840, 200, 860, 220);
 line(860, 220, 860, 300);
 line(860, 300, 890, 300);
 line(890, 300, 890, 190);
 line(890, 190, 840, 140);
 
 //Kopf
 line(750, 140, 765, 140);
 line(840, 140, 825, 140);
 noFill();
 arc(795, 140, 50, 50, 0, HALF_PI);
 arc(795, 140, 50, 50, HALF_PI, PI);
 
}


function draw() {

}
