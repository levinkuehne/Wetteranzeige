function setup() {
  
  //Hntergrund
  
  createCanvas(1000, 500);
  background("lightblue");
 
 //Kleidung 
 
 strokeWeight(10);
 stroke("black");
 
 //linker Arm
 line(790, 40, 740, 90);
 line(740, 90, 740, 200);
 line(740, 200, 770, 200);
 line(770, 200, 770, 120);
 line(770, 120, 790, 100);
  
 //Bauch 
 line(790, 100, 790, 230);
 line(790, 230, 880, 230);
 line(880, 230, 880, 100);
 line(835, 230, 835, 70);
 
 //rechter Arm
 line(880, 100, 900, 120);
 line(900, 120, 900, 200);
 line(900, 200, 930, 200);
 line(930, 200, 930, 90);
 line(930, 90, 880, 40);
 
 //Kopf
 line(790, 40, 805, 40);
 line(880, 40, 865, 40);
 noFill();
 arc(835, 40, 50, 50, 0, HALF_PI);
 arc(835, 40, 50, 50, HALF_PI, PI);
 
}


function draw() {

}
