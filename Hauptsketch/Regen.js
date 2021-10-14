let APIKEY = "6c897f070ff5c68387abf0306fedce0c";
let city;

function setup() {
  
 //Hintergrund
 
  createCanvas(1000, 500);
  background("lightblue");
  frameRate(120);
    
 //Grass
  strokeWeight(0);
  
  fill(154,205,50);
  rect(0,450,1000,50);
  ellipse(100, 450, 390, 120);
  ellipse(400, 450, 475, 90);
  ellipse(750, 450 , 550, 100);
  
  
  city = createInput("");
  city.position(25, 25);
  city.size(175);
  city.input(myInputEvent);
  
  button = createButton('submit');
  button.position(200, 25, 65);
  button.mousePressed(mySubmitEvent);
  
}

function mySubmitEvent(){
  const name = city.value();
   queryAPI(name);
}


function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function queryAPI(value) {
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid="+APIKEY;
  httpGet(url, 'jsonp', false, function(response) {
  console.log(response);
  });
}
/*  function preload() {
  Wetteranzeige = loadJSON(url);
}
  function draw() {
  let temp = main.temp[0];
  var weather = weather[0].description;
  print('weather' + 'temp');
  noLoop(); 
}  */

function draw() {
  
 //Regenwolke
 
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
