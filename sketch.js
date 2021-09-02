const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine;
var world;
var ground;
var angle=60;
var wedge;
var wall;
function setup() {
    createCanvas(400, 400)
    engine = Engine.create()
    world = engine.world;
    var ballOption = {
        restitution: 0.95,
        frictionAir: 0.01,
    }
    ball = Bodies.circle(100, 10, 20, ballOption);
    World.add(world, ball)
    var groundOption = {
        isStatic: true
    }
    var wedgeOption = {
        isStatic: true
    }
    var wallOption = {
        isStatic: true
    }
    
    ground = Bodies.rectangle(200, 390, 400, 40, groundOption)
    World.add(world, ground)
    wedge=Bodies.rectangle(100,200,100,20,wedgeOption);
    World.add(world,wedge);
    rectMode(CENTER)
    ellipseMode(RADIUS)
    wall = Bodies.rectangle(300, 150, 70, 10, wallOption)
    World.add(world, wall);
}

function draw() {
    background(51)
    Engine.update(engine);
    ellipse(ball.position.x, ball.position.y, 20);
    rect(ground.position.x, ground.position.y, 400, 40);
    Matter.Body.rotate(wedge,angle);
    push ()
    translate (wedge.position.x,wedge.position.y)
    rotate(angle)
    rect(0,0,100,20);
    pop()
    rect(wall.position.x,wall.position.y,70,20)
    angle+=0.1;
}

