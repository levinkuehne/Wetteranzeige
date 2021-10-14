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
  
  frameRate(30);

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
  
  fill("lightgrey");
  rect(666, 0, 334, 500);
  stroke("black");
  strokeWeight(2);
  line(666, 0, 666, 500);
  noStroke();
  
  fill("lightgrey");
  rect(0, 0, 333, 500);
  stroke("black");
  strokeWeight(2);
  line(333, 0, 333, 500);
  noStroke();
  
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
  line(390,200,640,200);
  line(350,160,540,160);
  line(440,120,650,120);
  line(360,240,580,240);
  line(440,280,600,280);
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
  line(390,200,640,200);
  line(350,160,540,160);
  line(440,120,650,120);
  line(360,240,580,240);
  line(440,280,600,280);
}

function drawClear() {
  
//T-Shirt

 strokeWeight(5);
 stroke("orange");
 
//linker Arm
 
 line(790, 40, 740, 90);
 line(740, 90, 770, 120);
 line(770, 120, 790, 100);
 
//Bauch
 
 line(790, 100, 790, 230);
 line(790, 230, 880, 230);
 line(880, 230, 880, 100);
 
//rechter Arm
 
 line(880, 100, 900, 120);
 line(900, 120, 930, 90);
 line(930, 90, 880, 40);
 
//Kopf
 
 line(790, 40, 805, 40);
 line(880, 40, 865, 40);
 noFill();
 arc(835, 40, 50, 50, 0, HALF_PI);
 arc(835, 40, 50, 50, HALF_PI, PI);


//Kurze Hose

 strokeWeight(5);
 stroke("blue");

 line(790, 260, 880, 260);
 line(790, 260, 760, 370);
 line(760, 370, 815, 370);
 line(815, 370, 835, 320);
 line(835, 320, 855, 370);
 line(855, 370, 910, 370);
 line(910, 370, 880, 260);
 
//Taschen
 
 line(785, 300, 810, 300);
 line(810, 300, 815, 260);
 line(885, 300, 860, 300);
 line(860, 300, 855, 260);

//Sonne

  noStroke();
  fill("yellow");
  circle(500, 200, 80);
  noFill();
  
  strokeWeight(10);
  stroke("yellow");
  
  translate(500, 200);
  
  for(let i = 0; i<=8; i++) {
    
    line(50, 0, 100, 0);
    rotate(2 * PI / 8 * i);
  }
  
  translate(-500, -200);

}
 
function drawMist() {
  
  stroke(195);
  strokeWeight(15);
  line(390,200,640,200);
  line(350,160,540,160);
  line(440,120,650,120);
  line(360,240,580,240);
  line(440,280,600,280);
}

function drawClouds() {
    
//lange Hose

 strokeWeight(5);
 stroke("blue");
 
//Hose
 
 line(790, 260, 880, 260);
 line(790, 260, 760, 450);
 line(760, 450, 815, 450);
 line(815, 450, 835, 320);
 line(835, 320, 855, 450);
 line(855, 450, 910, 450);
 line(910, 450, 880, 260);
 
//Taschen
 
 line(790, 300, 810, 300);
 line(810, 300, 815, 260);
 line(880, 300, 860, 300);
 line(860, 300, 855, 260);
  
//Pullover

  strokeWeight(5);
  stroke("green");
  
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
  
 //Wolke hinten
 
  fill("lightgrey");
  noStroke();
  rect(420, 158, 80, 40);
  circle(560, 75, 100);
  circle(500, 70, 100);
  circle(460, 75, 100);
  circle(415, 95, 100);
  circle(570, 140, 100);
  circle(510, 110, 100);
  circle(395, 155, 100);
  circle(460, 170, 100);
  circle(530, 180, 100);

 //Wolke vorne
 
  fill("white");
  noStroke();
  rect(390, 158, 80, 40);
  circle(580, 115, 100);
  circle(530, 110, 100);
  circle(480, 115, 100);
  circle(445, 135, 100);
  circle(600, 180, 100);
  circle(540, 150, 100);
  circle(425, 195, 100);
  circle(490, 210, 100);
  circle(560, 220, 100);
} 
function drawRain() {
  
//Jacke
 strokeWeight(5);
 stroke("red");
 
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
  
 //Jeans
 
 strokeWeight(5);
 stroke("blue");
 
 line(790, 260, 880, 260);
 line(790, 260, 760, 450);
 line(760, 450, 815, 450);
 line(815, 450, 835, 320);
 line(835, 320, 855, 450);
 line(855, 450, 910, 450);
 line(910, 450, 880, 260);
 
 //Taschen
 
 line(790, 300, 810, 300);
 line(810, 300, 815, 260);
 line(880, 300, 860, 300);
 line(860, 300, 855, 260);
  
 //Regenwolke
 
  noStroke();
  fill("darkgrey");
  // rect(340, 118, 80, 40);
  circle(535, 105, 50);
  circle(505, 100, 50);
  circle(475, 110, 50);
  circle(450, 125, 50);
  circle(550, 135, 50);
  circle(535, 135, 50);
  circle(460, 135, 50);
  circle(485, 140, 50);
  circle(505, 138, 50);
  noFill();
  
 //Regen
  
  stroke(100, 100, 255);
  strokeWeight(2);
  
  let x = random(435,565);
  let y = random(165, 358);
  
   line(x,y,x,y + 40);
   
  stroke("turquoise");
  strokeWeight(2);
  
  let x2 = random(435,565);
  let y2 = random(165,358);
  
   line(x2,y2,x2,y2 + 40);
   
  stroke("darkblue");
  strokeWeight(2);
  
  let x3 = random(435,565);
  let y3 = random(165,358);
  
   line(x3,y3,x3,y3 + 40);
}
