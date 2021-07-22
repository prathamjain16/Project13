var garden,rabbit;
var gardenImg,rabbitImg;
var apples,OrangeLeaves,redLeaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  OrangeLeavesImg = loadImage("orangeLeaf.png");
  redLeavesImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background("black");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  

  createOrangeLeaves();

  createApples();

  createRedLeaves();

  drawSprites()
}

function createApples() {
  if (frameCount%180===0) {
    apples = createSprite(100,100,50,50);
    apples.addImage(applesImg);
    apples.scale = .1;
    apples.velocityY= 1;
    apples.lifetime = 350;
    if (apples.isTouching(rabbit)) {
      apples.destroy();
    }
  }
}

function createOrangeLeaves() {
  if (frameCount%150===0) {
    OrangeLeaves = createSprite(200,50,50,50);
    OrangeLeaves.addImage(OrangeLeavesImg);
    OrangeLeaves.scale = .1;
    OrangeLeaves.velocityY= 1;
    OrangeLeaves.lifetime = 350;
    if (OrangeLeaves.isTouching(rabbit)) {
        OrangeLeaves.destroy();
    }
  }
}

function createRedLeaves() {
  if (frameCount%200===0) {
    redLeaves = createSprite(300,70,50,50);
    redLeaves.addImage(redLeavesImg);
    redLeaves.scale = .1;
    redLeaves.velocityY= 1;
    redLeaves.lifetime = 350;
    if (redLeaves.isTouching(rabbit)) {
        redLeaves.destroy();  
    }
  }
}