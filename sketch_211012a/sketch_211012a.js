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
  }
  
  let url = httpGet();
  let APIKEY = "6c897f070ff5c68387abf0306fedce0c";
  let city = createInput("");
  city.position(25, 25);
  city.size(175);
  city.input(Textfeld);
  url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKEY;
  
  httpGet(url, 'jsonp', false, function(response) {
    console.log(response);
  });

function Textfeld() {
  console.log('you are typing: ', this.value());
}
}
function draw() {
}
