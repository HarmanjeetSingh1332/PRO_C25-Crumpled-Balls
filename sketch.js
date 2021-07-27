
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground,paper;	
var world;


function setup() {
	createCanvas(1400, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(700,570,1400,20);
	dustbin=new Dustbin(1000,550);
	paper=new Paper(250,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  ground.display();
  dustbin.display();
  paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}
