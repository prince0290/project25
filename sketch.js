const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var paper , paperBody , paperImg;
var rect1,rect2,rect3,rect4;

function preload()
{

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(500,680,1000,10);
	

	paper = new Paper(100,550,50,50);

	rect1 = new Dustbin(545,670,20,170);	
	rect2 = new Dustbin(570,670,110,20);
	rect3 = new Dustbin(653,670,20,170);
	rect4 = new Dustbin(670,800,10,10);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background("GRAY");
  Engine.update(engine);
	 
  	rect3.display();
	rect1.display();
	ground.display();
	rect2.display();
	paper.display();
	rect4.display();
	

}

function keyPressed() {
	if ( keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});

	}
}

