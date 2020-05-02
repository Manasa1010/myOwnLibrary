var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1=createSprite(300, 50,50,50);
  obj2=createSprite(200, 10,50,50);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 obj2.x=World.mouseX;
 obj2.y=World.mouseY; 
 if(isTouching(obj1,obj2)){
obj1.shapeColor="blue";
obj2.shapeColor="blue";
 }
 else{
  obj1.shapeColor="pink";
  obj2.shapeColor="pink";
 }
  drawSprites();
}
