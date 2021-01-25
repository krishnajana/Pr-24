
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, ground, stone;
var rubber, rubberOptions;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
 

	hammer =new Hammer(470, 120, 150, -PI/7)
  ground = new Ground(600,height,1200,110);
  stone =new Stone(400, 350);
  rubber=Bodies.circle(300, 200, 20, rubberOptions);
  World.add(world, rubber);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightBlue");
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
}



