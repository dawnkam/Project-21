
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	fill(550)
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(1300,600,20,120);

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x,ball.position.y,20);

	groundObj.show();
	leftside.show();
	rightside.show();
	Engine.update(engine);
	
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-90})
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-100,y:100})
	}
}

