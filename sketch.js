var ufo,bullet,alien,a2;
var bg,ufoImg,bimg,alienimg;
var score=0
function preload(){
  bg=loadImage("images.jpg");
  ufoImg=loadImage("ufo.png");
alienimg=loadImage("alien.png");
 bimg=loadImage("bullet.png")
 a2=new Group(); 
 bgr=new Group();
}
function setup(){
  createCanvas(800,600)
  ufo=createSprite(400,480);
  ufo.addImage(ufoImg);
  ufo.scale=0.2
  
  

}
function draw(){
  background(bg)
 if(bgr.isTouching(a2)){
a2.destroyEach();
bgr.destroyEach();
score++
 }
 textSize(30);
 fill(255);
 text("Score: "+score,100,50)  

if(a2.isTouching(ufo)){
  textSize(50);
 fill(255,0,0);
 text("GAME OVER!",400,300)  
 ufo.visible=false;
}
textSize(20);
 fill("gold");
 text("Made by Ayush",400,550)  
 
  if(keyDown(LEFT_ARROW)){
    ufo.x=ufo.x-3;
  }
  if(keyDown(RIGHT_ARROW)){
    ufo.x=ufo.x+3;
  }
  enemy();
  Bullet();
  drawSprites();
}
function Bullet(){
  if(keyDown("space")){
    bullet=createSprite(400,480);
    bullet.addImage(bimg);
    bullet.scale=0.2;
    bullet.x=ufo.x;
    bullet.velocityY=-10;
    bgr.add(bullet)
  }
}
function enemy(){
  if(frameCount%10===0){
    alien=createSprite(Math.round(random(150,400)),50);
  alien.addImage(alienimg);
  alien.scale=0.2
  alien.velocityY=10;
  alien.lifetime=60;
  a2.add(alien)
  }
}