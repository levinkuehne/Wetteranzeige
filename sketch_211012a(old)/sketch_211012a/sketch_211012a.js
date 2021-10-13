let APIKEY = "6c897f070ff5c68387abf0306fedce0c";
let APIURL = "https://api.openweathermap.org/data/2.5/weather?q=";
let APPID = "&appid=" + APIKEY;

let city;
let response;
let DATA;
let temperature;
let weather;

function setup() {
  
  city = createInput("");
  city.position(25, 25);
  city.size(175);
  city.input(myInputEvent);
  
  button = createButton('submit');
  button.position(200, 25, 65);
  button.mousePressed(mySubmitEvent);

  noLoop();
}

function mySubmitEvent(){
  const name = city.value();
   queryAPI(name);
}


function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function queryAPI(value) {
  let url = APIURL + value + APPID;
  httpGet(url, 'jsonp', false, function(response) {
  console.log(response.main.temp);
  DATA = response;
});
  loop();
}

function displayWeatherData() {
   if (DATA !== undefined) {
     console.log(DATA.main.temp);
     console.log(DATA.weather[0].main);
     
     temperature = DATA.main.temp - 273,15;
     weather = DATA.weather[0].main;
     temp = round(temperature, 1);
     
   let OutputTemp = "Die Temperatur beträgt " + temp + " °C.";
   fill(0);
   text(OutputTemp, 25, 75, 200, 100);
  
   let OutputWeather = weather;
   fill(0);
   text(OutputWeather, 25, 125, 200, 100);
} 
}


function draw() {
  
  frameRate(1);
  
 //Hintergrund
 
  createCanvas(1000, 500);
  background("lightblue");
    
 //Grass
  strokeWeight(0);
  
  fill(154,205,50);
  rect(0,450,1000,50);
  ellipse(100, 450, 390, 120);
  ellipse(400, 450, 475, 90);
  ellipse(750, 450 , 550, 100);
  
  displayWeatherData();
  
  frameRate(10);
  
  if(weather == "Rain") {
    drawRain();
  } /* elseif(weather == "Clouds"){
    drawClouds();
  } */
}
/* function drawClouds() {
 //Wolke1
  noStroke();
  fill("white");
  rect(840, 118, 80, 40);
  
  circle(920, 105, 50);
  
  circle(890, 100, 50);
  
  circle(860, 110, 50);
  
  circle(835, 125, 50);

  circle(935, 135, 50);

  circle(920, 135, 50);

  circle(845, 135, 50);

  circle(870, 140, 50);

  circle(890, 138, 50);
  noFill();
} */
function drawRain() {
  
 //Regenwolke
  noStroke();
  fill("white");
  rect(840, 118, 80, 40);
  
  circle(920, 105, 50);
  
  circle(890, 100, 50);
  
  circle(860, 110, 50);
  
  circle(835, 125, 50);

  circle(935, 135, 50);

  circle(920, 135, 50);

  circle(845, 135, 50);

  circle(870, 140, 50);

  circle(890, 138, 50);
  noFill();
  
 //Regen
  loop();
  frameRate(3000);
  stroke(100, 100, 255);
  strokeWeight(2);
  
  let x = random(820,950);
  let y = random(165, 358);
  
   line(x,y,x,y + 40);
   
  stroke("lightblue");
  strokeWeight(4);
  
  let x2 = random(820,950);
  let y2 = random(165,358);
  
   line(x2,y2,x2,y2 + 40);
}
