const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var backgroundImg;
var boy1;
var bou;
var ice;
function preload() {
    backgroundImg = loadImage("snow1.jpg");
    boy1=loadImage("h.jpeg")
    boy2=loadImage("snow4.webp")
}

function setup(){
   var canvas= createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  
   bou =createSprite(500,200,20,20)
bou.addImage(boy1)



if(frameCount%80==0){
ice=createSprite(random(20,1200),random(0,10),10,10)
ice.addImage(boy2)
ice.velocityY=2
ice.scale=0.2
}
   drawSprites();
}

