
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground,groundimage;
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundimage = loadImage("pic.png");
 
}



function setup() {
  createCanvas(585,400);
  
  monkey = createSprite(100,300,10,10);
  monkey.addAnimation("i",monkey_running);
 monkey.scale=0.2
  
ground=createSprite(290,390,20,20);
  ground.addImage("g",groundimage);
  
  score=0
}


function draw() {
  background("white")
  text("Score: "+ score, 500,40);
drawSprites()
  
  
    if(keyDown("space")&& monkey.y >= 139) {
      monkey.velocityY = -12;
      
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
 // if(bananaGroup.isTouching(monkey)){
   //bananaGroup.destroyEach(); 
  //}
  
  spawnBanana();
}

function spawnBanana() {
  if (frameCount % 80 === 0) {
  banana = createSprite(200,300,10,10);
    banana.y = Math.round(random(120,120));
     banana.addImage("o",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
   // bananaGroup.add(Banana);
  }
}




