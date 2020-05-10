var ball, ball_img, paddle, paddle_image;
function preload() 
{
  ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
   ball = createSprite(200,200,20,10);
   ball.addImage(ball_img);
   ball.velocityX = 9;
  
   paddle = createSprite(350,200,10,100);
   paddle.addImage(paddle_img);

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  randomVelocity();
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.isTouching(paddle))
     {
       ball.velocityX = -9;
ball.velocityY = Math.round(random(random(-8,-10),random(8,10)));
     }
}

