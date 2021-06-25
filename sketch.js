
var speed,weight,thickness;
var car1,car2,car3,car4,color,wall,brick;
var damage;
var line1,line2,line3;
var cargroup;
var bg,bgs;
function preload(){
brick=loadImage("brick1.jpg");
color=loadImage("color bullet.png");
bg=loadImage("gunfight.jpg");
}
function setup() {
  createCanvas(400,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bgs=createSprite(200,200,10,10);
  bgs.addImage("gun",bg);
  bgs.scale=2.2;
  line1=createSprite(140,100,460,5);
line1.shapeColor="white";
 line2=createSprite(140,200,460,5);
 line2.shapeColor="white";
 line3=createSprite(140,300,460,5);
 line3.shapeColor="white";
  wall=createSprite(360,200,thickness,height);
 wall.shapeColor="grey";

 car1=createSprite(40, 50, 20,6);
 car1.shapeColor="red";
 car2=createSprite(40,150,20,6);
 car2.shapeColor="red";
 car3=createSprite(40,250,20,6);
 car3.shapeColor="red";
 car4=createSprite(40,350,20,6);
 car4.shapeColor="red"; 
 
  car1.addImage(color);
  car3.addImage(color);
  car2.addImage(color);
  car4.addImage(color);
  car1.scale=0.2;
  car3.scale=0.2;
  car4.scale=0.2;
  car2.scale=0.2;

 
 car1.setCollider("rectangle",110,0,190,116)
 car3.setCollider("rectangle",110,0,190,116)
 car2.setCollider("rectangle",110,0,190,116)
 car4.setCollider("rectangle",110,0,190,116)


 
 
 
 cargroup=createGroup();

}

function draw() {
  background("grey"); 
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  cargroup.add(car1);
  cargroup.add(car2);
  cargroup.add(car3);
  cargroup.add(car4);
  if(hascollided(cargroup,wall)){
    cargroup.setVelocityEach(0,0);
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="green";
    }else{
      wall.shapeColor="red";
    }
  }
  drawSprites();
}
