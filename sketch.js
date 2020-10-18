var PLAY = 1;
var END=0;
var gameState = PLAY;
 var object1G;
 var object2G;
 var object3G
 var object4G
 var tumblew
 var cowboy;
 var shoot;
 var score = 0
 var shootg
 var gameover,gameoverr;
 
 function preload(){
   cowboy = loadImage("cowboy.png")
   tumblew = loadImage("tumblew.png")
   backgroundImg = loadImage("1.jpg")
   cowboy1 = loadImage("cowboy1.png")
   gameoverr = loadImage("game.png")
   rip = loadImage("rip.png")
   bullet = loadImage("bullet.png")
   
 }
function setup() {
  createCanvas(1000,800);
 
  ground= createSprite(500,750,1000,50)
  ground.shapeColor=("brown");
  
  player= createSprite(500,700,50,100)
  player.addImage(cowboy);
  player.scale = 0.25;
  edges = createEdgeSprites();
  object1G = new Group();
  object2G = new Group();
  object3G = new Group();
  object4G = new Group();
  object5G = new Group();
  shootg = new Group();

//creating the bullets
  var shoot = createSprite(10,10,10,10)

  shoot.visible= false;

}

function draw() {

  background(backgroundImg);
  textSize(30);
  stroke("white");
  fill("red");
  textFont("jazzy")
  text("score:"+score,880,25)
 
    if(gameState===PLAY){
 if(keyDown(LEFT_ARROW)){
player.x= player.x-10;
player.addImage(cowboy1)
 }
 
if(keyDown(RIGHT_ARROW)){
  player.x=player.x+10;
  player.addImage(cowboy)

}


object1G.bounceOff(ground);
object2G.bounceOff(ground);
object3G.bounceOff(ground);
object4G.bounceOff(ground);
object5G.bounceOff(ground);
object1G.bounceOff(edges);
object2G.bounceOff(edges);
object3G.bounceOff(edges);
object4G.bounceOff(edges);
player.bounceOff(edges);
if(object1G.isTouching(ground)){
object1G.velocityY=4;

}
if(keyWentDown("space")){
  var shoot =createSprite(100,350,5,5);
  shoot.addImage(bullet);
  shoot.velocityY=-15;
  shoot.scale = 0.05;
 shoot.x=player.x;
 shoot.y =player.y;
  shoot.shapeColor="red";
  shootg.add(shoot);
  
}

for (var i = 0; i < object1G.length; i++) {
    
  if(object1G.get(i).isTouching(shootg)){
    object1G.get(i).remove()
  score =score+1;
}
}
for (var i = 0; i < object2G.length; i++) {
    
  if(object2G.get(i).isTouching(shootg)){
    object2G.get(i).remove()
  score =score+1;
}
}
for (var i = 0; i < object3G.length; i++) {
    
  if(object3G.get(i).isTouching(shootg)){
    object3G.get(i).remove()
  score =score+1;
}
}
for (var i = 0; i < object4G.length; i++) {
    
  if(object4G.get(i).isTouching(shootg)){
    object4G.get(i).remove()
  score =score+1;
}
}
spawnobjects();
spawnobjects2();
spawnobjects3();
spawnobjects4();
if(object1G.isTouching(player)||object2G.isTouching(player)||object3G.isTouching(player)||
object4G.isTouching(player)){
  gameState=END;
}

    }
    else if (gameState===END){
     gameover= createSprite(500,250,10,10)
     gameover.addImage(gameoverr)
     player.addImage(rip);
     textSize(50);
     text("score:"+score,400,500)

      player.velocityX=0;
      object1G.setVelocityXEach(0);
      object2G.setVelocityXEach(0);
      object3G.setVelocityXEach(0);
      object4G.setVelocityXEach(0);
    }




  drawSprites();
}
function spawnobjects(){
  if(frameCount % 100===0){
    var r1 = Math.round(random(100,700))
    var object1 = createSprite(0,r1,30,30)
    object1.velocityY=-5;
    object1.velocityX=2;

    object1.shapeColor=("blue");
    object1.addImage(tumblew);
   object1.scale = 0.1;
    

    object1G.add(object1);
  }

}
function spawnobjects2(){
  if(frameCount% 100===0){
    var r2 = Math.round(random(100,700))
    var object2 = createSprite(0,r2,60,60)
    object2.velocityY=-5;
    object2.velocityX=2;
    object2G.add(object2);
    object2.addImage(tumblew);
   object2.scale = 0.1;
   
  }
}
function spawnobjects3(){
  if(frameCount% 100===0){
    var r3 = Math.round(random(100,700))
    var object3 = createSprite(1000,r3,30,30)
    object3.velocityY=-5;
    object3.velocityX=-2;
    object3.addImage(tumblew);
   object3.scale = 0.1;
    
    object3G.add(object3);
  }
}
function spawnobjects4(){
  if(frameCount% 100===0){
    var r4 = Math.round(random(100,700))
    var object4 = createSprite(1000,r4,60,60)
    object4.velocityY=-5;
    object4.velocityX=-2;
    object4.addImage(tumblew);
   object4.scale = 0.1;
    object4G.add(object4);
  }
}
