function setup() {
  
 //Hintergrund
 
  createCanvas(1000, 500);
  background("lightblue");
  frameRate(120);
    
 //Grass
  strokeWeight(0);
  {fill(154,205,50);
  rect(0,450,1000,50);
  ellipse(100, 450, 390, 120);
  ellipse(400, 450, 475, 90);
  ellipse(750, 450 , 550, 100);
  
  let APIKEY = "6c897f070ff5c68387abf0306fedce0c";
  let city = createInput("Bitte geben Sie eine Stadt ein.");
  city.position(750, 50);
  city.size(175);
  city.input(Textfeld);
  
}


function Textfeld() {
  console.log('you are typing: ', this.value());
}
}
