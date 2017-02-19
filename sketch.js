var img;
var imgMask;

var img1;
var imgMask1;

var img2;
var imgMask2;

var img3;
var imgMask3;

function preload() {
  img = loadImage("http://i.imgur.com/ntpe65B.png");
  imgMask = loadImage("http://i.imgur.com/ntpe65B.png");
    
  img1 = loadImage("http://i.imgur.com/ExjAOIE.png");
  imgMask1 = loadImage("http://i.imgur.com/ExjAOIE.png");
      
  img2 = loadImage("http://i.imgur.com/LPsnn48.png");
  imgMask2 = loadImage("http://i.imgur.com/LPsnn48.png");
    
  img3 = loadImage("http://i.imgur.com/4fGcCYh.png");
  imgMask3 = loadImage("http://i.imgur.com/4fGcCYh.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  img.mask(imgMask);
  img1.mask(imgMask1);
  img2.mask(imgMask2);
  img3.mask(imgMask3); 
  imageMode(CENTER);
  
}

function draw() {
    var R = random(20);
    var Left = map(mouseX, 0, innerWidth/2, 10, 0);
    var Right = map(mouseX, window.innerWidth/2, window.innerWidth, 0, 10);
    var Left2 = map(window.innerWidth, 0, window.innerWidth/2, window.innerWidth/2, 0)
    
    if (mouseX < innerWidth/2) {
        var i = R*Left;
    } else {
        var i = R*Right;
    }
        

    if (mouseX < innerWidth/2) {
        var t = Left*100;
    } else {
        var t = Left*100;
    }
    
    if (mouseX < innerWidth/2) {
        var t1 = Left*50;
    } else {
        var t1 = Left*50;
    }
    
    if (mouseX < innerWidth/2) {
        var t2 = Left*200;
    } else {
        var t2 = Left*200;
    }
    
  background(0);
  noCursor();
  fill(255, 0, 0, Left+i);
  rect(0, innerHeight/2-48, innerWidth, 96);
  fill(0, 0, 0, Left+i);
  noStroke();
  rect(random(-100, innerWidth), random(innerHeight/2-48, innerHeight/2+48), random(30, 150), random(6));
  fill(0, 0 , 0, Left+i);
  noStroke();
  rect(random(-100, innerWidth), random(innerHeight/2-48, innerHeight/2+48), random(30, 150), 1);
  //image(img, width/2, height/2);
  image(img, mouseX-t+i, height/2);
  image(img1, mouseX-t1+i+random(3), height/2);
  image(img2, mouseX-t2+i+random(5), height/2);
  image(img3, mouseX+i+random(7), height/2);
    
    
}