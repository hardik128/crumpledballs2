


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground,binImage
function preload()
{
	 binImage=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	
    bin = createSprite(1000,285,150,150)
	bin.addImage(binImage)
	bin.scale=0.6
	
	ground=new Ground(600,390,1200,20)
	plank1=new plank(1000,370,150,20)
	plank2=new plank(935,305,20,150)
    plank3=new plank(1065,305,20,150)
	paper1=new Paper(200,310,17.5)
	
	Engine.run(engine);
}


function draw() {
  
  background(200);
  rectMode(CENTER);
  
  

//console.log(paper1)

ground.display();
plank1.display();
plank2.display();
plank3.display();
paper1.display();

drawSprites();

}  

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.positon,{x:180,y:-300})
	}
}

