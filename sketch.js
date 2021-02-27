const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
var thread;

var superhero,box2, engine, world, ground;

function setup(){
  createCanvas(1000,550);
  
  engine = Matter.Engine.create()
  world = engine.world
  
  
  box1 = new Box(500,500,50,50);
  box2 = new Box(550,500,50,50);
  box3 = new Box(600,500,50,50);
  box4 = new Box(650,500,50,50);
  box5 = new Box(700,500,50,50);
  box6 = new Box(750,500,50,50);
box7 = new Box(500,450,50,50);
box8 = new Box(550,450,50,50);
box9 = new Box(600,450,50,50);
box10 = new Box(650,450,50,50);
box11 = new Box(700,450,50,50);
box12 = new Box(750,450,50,50);
box13 = new Box(500,400,50,50);
box14 = new Box(550,400,50,50);
box15 = new Box(600,400,50,50);
box16 = new Box(650,400,50,50);
box17 = new Box(700,400,50,50);
box18 = new Box(750,400,50,50);
box19 = new Box(500,350,50,50);
box20 = new Box(550,350,50,50);
box21 = new Box(600,350,50,50);
box22 = new Box(650,350,50,50);
box23 = new Box(700,350,50,50);
box24 = new Box(750,350,50,50);
box25 = new Box(500,300,50,50);
box26 = new Box(550,300,50,50);
box27 = new Box(600,300,50,50);
box28 = new Box(650,300,50,50);
box29 = new Box(700,300,50,50);
box30 = new Box(750,300,50,50);
box31 = new Box(500,250,50,50);
box32 = new Box(550,250,50,50);
box33 = new Box(600,250,50,50);
box34 = new Box(650,250,50,50);
box35 = new Box(700,250,50,50);
box36 = new Box(750,250,50,50);
superhero = new Box(100,400,60,60,50);

var options = {bodyA:bob.body, pointB:{x:420, y: 300},lenght:200}
rope = Constraint.create(options);
World.add(world,thread);

var options = {isStatic:true}
  ground = Matter.Bodies.rectangle(500,520,1000,20,options)
  Matter.World.add(world,ground)
}

function draw(){
  background("white")
  Matter.Engine.update(engine)
  rectMode(CENTER)

  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

    
    superhero.display();
line(superhero.body.position.x,superhero.body.position.y,100,100);

  rect(ground.position.x,ground.position.y,1000,10)
  
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{ x: mouseX, y: mouseY});
}