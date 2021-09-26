const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var rubber;
var ground;
var stone;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(50,50);
rubber = new Rubber(200,200,30);
stone = new Stone(700,320,100,100);
iron = new Iron(300,300);

var ground_option={
	isStatic:true
};
ground = Bodies.rectangle(10,680,10000,20,ground_option);
        World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  hammer.display();
  rubber.display();
  stone.display();
iron.display();
  rect(ground.position.x,ground.position.y,10000,20);

  //drawSprites();
 
}
