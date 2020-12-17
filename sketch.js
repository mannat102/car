
var car,ground;
var speed,weight;
var car2,car1,car3
var wall,thickness
var bullet,speed,weight

function setup() {
  speed=random(223,321)
  weight=random(30,52)
  createCanvas(500, 700);
thickness=random(22,83)
  rectMode(CENTER);
wall=createSprite(470,650,thickness,height/2)  
wall.shapeColor=color(80,80,10)
  speed=random(18,10);
weight=random(400,1500);
  
car1=createSprite(50,695,40,10);
  car1.shapeColor=color(11)
  car1.velocityX = speed;
  
  car2=createSprite(50,622,40,10);
  car2.velocityX = speed; 
  
  car=createSprite(50,656,40,10);
  car.shapeColor=color(180)
  car.velocityX = speed;


  car3=createSprite(50,590,40,10);
  car3.shapeColor=color(180)
  car3.velocityX = speed;

  ground=createSprite(width/2, height-125, width,10);
  ground.shapeColor=color(111)
    
 
 ground=createSprite(width/2, height-25, width,10);
 ground.shapeColor=color(111)
   
 car.collide(ground);
   
   ground=createSprite(width/2, height-57, width,10);
   ground.shapeColor=color(90)

   ground=createSprite(width/2, height-90, width,10);
   ground.shapeColor=color(90)



}



function draw() {
  background(80,100,50);  
 car1.collide(wall)
 car2.collide(wall)
 car.collide(wall)
 car3.collide(wall)
  drawSprites();







 







}