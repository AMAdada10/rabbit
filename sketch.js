var apple;
var appleImg;
var garden,rabbit;
var gardenImg,rabbitImg;
function preload(){
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png")
  rabbitImage = loadImage("rabbit.png");
}

function setup(){
  

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);

}

function draw() {
  background(gardenImg);
  
  edges= createEdgeSprites();
  rabbit.collide(edges)
  
   Math.round(frameCount/60)
 rabbit.x=mouseX
apple.velocity.X=4
SpawnApples();





 











  drawSprites()
}