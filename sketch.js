
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper(60,200,20);
	ground=new ground(400,650,1200,20);
	box1=new Box(800,740,100,200);
	box2=new Box(690,730,300,20);
	box3=new Box(690,740,100,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
 Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-85});
	}
}


