const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pig1, box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

       ground = new Ground(200,height,2000,20)
       pig1=new Pig(810,350)
       box1=new Box(700,320,70,70)
       box2=new Box(920,320,70,70)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   pig1.display()
   box1.display()
   box2.display()
  
}