
var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 80, 50);
  a.shapeColor = rgb(1,100,200);
  a.velocityX = 4;
  b = createSprite(600,200,50,90);
  b.shapeColor = rgb(1,100,200);
  b.velocityX = -4;
}

function draw() {
  background(rgb(1,2,3));  
  //b.x = World.mouseX;
  //b.y = World.mouseY;
  bounceOff(a,b);

  if(isTouching(a,b)){ 
    a.shapeColor = rgb(2,7,0);
    b.shapeColor = rgb(2,7,0);
  }
  else{
    a.shapeColor = rgb(1,100,200);
    b.shapeColor = rgb(1,100,200);
  }

  drawSprites();
}

