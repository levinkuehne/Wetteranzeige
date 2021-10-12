function setup() {
  
 //Hintergrund
 
  createCanvas(500, 500);
  background("lightblue");
  frameRate(120);
  
 //Wolke
 
  noStroke();
  rect(340, 118, 80, 40);
  
  noStroke();
  fill("white");
  circle(420, 105, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(390, 100, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(360, 110, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(335, 125, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(435, 135, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(420, 135, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(345, 135, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(370, 140, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(390, 138, 50);
  noFill();

}


function draw() {
  
 //Regen
 
  stroke(100, 100, 255);
  strokeWeight(2);
  
  let x = random(320,450);
  let y = random(165, 358);
  
   line(x,y,x,y + 40);
   
  stroke("lightblue");
  strokeWeight(4);
  
  let x2 = random(320,450);
  let y2 = random(165,358);
  
   line(x2,y2,x2,y2 + 40);
}
