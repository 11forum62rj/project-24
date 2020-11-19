
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var db1,db2,db3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,10);
	ground = new Ground(350,380,700,20);
	db1 = new Dustbin(650,320,10,100);
	db2 = new Dustbin(550,320,10,100);
	db3 = new Dustbin(600,367,100,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

 paper.display();
 ground.display();
 db1.display();
 db2.display();
 db3.display();

 drawSprites();
 
}


 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-10});
	 }
 }


  




