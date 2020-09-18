var fixedRect, movingRect;
var moreObject,moreObject2,moreObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  moreObject = createSprite(600,500,79,43);
  moreObject.shapeColor = "orange";

  moreObject2 = createSprite(200,600,83,43);
  moreObject2.shapeColor = "blue";

  moreObject3 = createSprite(500,100,79,92);
  moreObject3.shapeColor = "white";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


// if(isTouching(movingRect,moreObject)){
//   movingRect.shapeColor="cyan";
//   moreObject.shapeColor="cyan";
// }else{
//   movingRect.shapeColor="green";
//  moreObject.shapeColor="green";
// }
 bounceOff(movingRect,fixedRect);
   

  
  drawSprites();
}
