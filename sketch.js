const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var ground,ball;
var engine,world;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true,
  }
   ground =Bodies.rectangle(400,560,800,40,option);
   World.add(world,ground);

   var option = {
    restitution:0.04,
  }
  ball =Bodies.circle(400,40,40,option);
   World.add(world,ball);
   
 
}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER)
  
  rect(ground.position.x,ground.position.y,800,40);
  ellipse(ball.position.x,ball.position.y,40);
  drawSprites();
}