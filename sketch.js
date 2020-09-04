
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor=createSprite(400,height,800,20);
	stoneObj=new stone(100,100,50,50);
	boyobj=new boy(200,650);
	treeobj=new tree(500,600);
	mango1=new mango(490,630);
	mango2=new mango(488,640);
chain1=new chain(boyobj.body,stoneObj.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  floor.display();
  stoneObj.display();
  boyobj.display();
  mango1.display();
  mango2.display(); 
  treeobj.display();
  
  chain1.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain1.fly()
}



