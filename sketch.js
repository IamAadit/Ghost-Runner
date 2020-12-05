var tower,towerImage,door,doorGroup,doorImage,climber,climberGroup,climberImage,ghost,ghostImage;
function preload(){ 
towerImage=loadImage("tower.png")
doorImage=loadImage("door.png")
climberImage=loadImage("climber.png")
ghostImage=loadImage("ghost-standing.png")
}
function setup(){
createCanvas(600,600)  
tower=createSprite(300,300)
tower.addImage(towerImage)
tower.velocityY=1; 
  
ghost=createSprite(200,200,50,50)
ghost.addImage(ghostImage)
ghost.scale=0.3
}
function draw(){
background("blue")  
if (tower.y>600){
 tower.y=300; 
    }
  Spawndoor();
  if (keyDown("space")){
    ghost.velocityY=-5;   
  }
  ghost.velocityY=ghost.velocityY+0.8
  drawSprites()  
}
function Spawndoor(){
  if (frameCount%120===0){
   door=createSprite(200,50) 
  door.addImage(doorImage)
  door.x=Math.round (random (100,400))
  door.velocityY=1;
  door.lifetime=600;
  climber=createSprite(200,10)
  climber.addImage(climberImage)
  climber.velocityY=1;
  climber.x=door.x
      }
}