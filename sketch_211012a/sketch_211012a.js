function setup() {
  
 //Hintergrund
 
  createCanvas(500, 500);
  background("lightblue");
  frameRate(120);
  
  let APIKEY = "6c897f070ff5c68387abf0306fedce0c";
  let city = createInput("Bitte geben Sie Ihre Stadt ein.");
  city.position(400, 50);
  city.size(100);
  city.input(Textfeld);
  
}


function Textfeld() {
  console.log('you are typing: ', this.value());
}
