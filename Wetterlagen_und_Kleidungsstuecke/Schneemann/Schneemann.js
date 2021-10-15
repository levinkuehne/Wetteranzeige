function setup() {

//Hntergrund
  
  createCanvas(1000, 500);
  background("lightblue");
  
  
 //Ärme 
 
 strokeWeight(5);
 stroke("brown");
 
 line(480, 330, 380, 280);
 line(520, 330, 620, 280);
 
 
//Schneemann

 stroke("withe");
 
 ellipse( 500, 440, 150, 150);
 ellipse( 500, 330, 120, 120);
 ellipse( 500, 250, 80, 80);
 
 
//Knöpfe

 strokeWeight(10);
 stroke("black");
 point(500, 290);
 point(500, 310);
 point(500, 330);
 point(500, 350);


//Auge

 strokeWeight(8);
 stroke("black");
 
 point(483, 240);
 point(515, 240);
 
 
//Hut

fill("black");
 rect(460, 200, 80, 20);
 rect(480, 140, 40, 60);


//Nase

stroke("orange");
fill("orange");
 triangle(494, 255, 500, 252, 510, 270);

}


function draw() {

}
