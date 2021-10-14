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
  
  frameRate(120);

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
  
  if(weather == "Rain") {
    drawRain();
  } else if(weather == "Clouds") {
    drawClouds();
  } else if(weather == "Mist") {
    drawMist();
  } else if(weather == "Clear") {
    drawClear();
  } else if (weather == "Thunderstorm") {
    drawThunderstorm();
  } else if(weather == "Snow") {
    drawSnow();
  } else if(weather == "Fog") {
    drawFog();
  } else if(weather == "Haze") {
    drawHaze();
  }
}

function drawHaze() {
  stroke(195);
  strokeWeight(15);
  line(300,200,550,200);
  strokeWeight(15);
  line(250,160,450,160);
  strokeWeight(15);
  line(350,120,560,120);
  strokeWeight(15);
  line(270,240,490,240);
  strokeWeight(15);
  line(350,280,510,280);
}

function drawSnow() {
 
}

function drawThunderstorm() {
  
  fill("yellow");
  strokeWeight(5);
  stroke(255);
  beginShape();
  vertex(400, 180);
  vertex(330, 310);
  vertex(375, 310);
  vertex(330, 430);
  vertex(455, 280);
  vertex(400, 280);
  endShape(CLOSE);
  
  fill("grey");
  noStroke();
  rect(390, 168, 80, 40);
  circle(490, 115, 100);
  circle(440, 110, 100);
  circle(390, 115, 100);
  circle(355, 135, 100);
  circle(510, 180, 100);
  circle(450, 150, 100);
  circle(335, 195, 100);
  circle(400, 210, 100);
  circle(470, 220, 100);
  noFill();  
}

function drawFog() {

  stroke(195);
  strokeWeight(15);
  line(300,200,550,200);
  strokeWeight(15);
  line(250,160,450,160);
  strokeWeight(15);
  line(350,120,560,120);
  strokeWeight(15);
  line(270,240,490,240);
  strokeWeight(15);
  line(350,280,510,280);
}

function drawClear() {
  
  noStroke();
  fill("yellow");
  circle(400, 175, 80);
  noFill();
  
  strokeWeight(10);
  stroke("yellow");
  
  translate(400, 175);
  
  for(let i = 0; i<=8; i++) {
    
    line(50, 0, 100, 0);
    rotate(2 * PI / 8 * i);
  }
  
  translate(-400, -175);
}

function drawMist() {
  
  stroke(195);
  strokeWeight(15);
  line(300,200,550,200);
  strokeWeight(15);
  line(250,160,450,160);
  strokeWeight(15);
  line(350,120,560,120);
  strokeWeight(15);
  line(270,240,490,240);
  strokeWeight(15);
  line(350,280,510,280);
}

function drawClouds() {
    
 //Wolke hinten
 
  fill("lightgray");
  noStroke();
  rect(420, 158, 80, 40);
  circle(510, 85, 100);
  circle(460, 80, 100);
  circle(410, 85, 100);
  circle(375, 105, 100);
  circle(530, 150, 100);
  circle(470, 120, 100);
  circle(355, 165, 100);
  circle(420, 180, 100);
  circle(490, 190, 100);
 
 //Wolke vorne
 
  fill("white");
  noStroke();
  rect(390, 168, 80, 40);
  circle(490, 115, 100);
  circle(440, 110, 100);
  circle(390, 115, 100);
  circle(355, 135, 100);
  circle(510, 180, 100);
  circle(450, 150, 100);
  circle(335, 195, 100);
  circle(400, 210, 100);
  circle(470, 220, 100);
} 
function drawRain() {
  
 //Regenwolke
 
  noStroke();
  fill("lightgrey");
  rect(340, 118, 80, 40);
  circle(420, 105, 50);
  circle(390, 100, 50);
  circle(360, 110, 50);
  circle(335, 125, 50);
  circle(435, 135, 50);
  circle(420, 135, 50);
  circle(345, 135, 50);
  circle(370, 140, 50);
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
