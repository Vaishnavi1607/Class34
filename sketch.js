const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;


var ball,ground,chain,sun;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15,box16,box17,box18,box19,box20,box21,box22,box23,box24;
var engine,world;
var pillar1,pillar2,pillar3;


function setup(){

 createCanvas(1200,600)

engine = Engine.create()
world = engine.world

ground = new Ground(600,590,1200,15)

sun= Bodies.circle(200,100,60,{isStatic:true})
World.add(world,sun)

ball = Bodies.circle(400,300,70,{restitution:0.3,density:1.2})
World.add(world,ball)


chain = Constraint.create({bodyA:ball,pointB:{x:400,y:10},stiffness:0.50,length:400})
World.add(world,chain)

//first row
box1 = new Box(700,100)
box2 = new Box(700,100)
box3 = new Box(700,100)
box4 = new Box(700,100)
box5 = new Box(700,100)
box6 = new Box(700,100)
box7 = new Box(700,100)
box8 = new Box(700,100) 


//second row
box9 = new Box(800,100)
box10 = new Box(800,100) 
box11 = new Box(800,100)
box12 = new Box(800,100) 
box13 = new Box(800,100)
box14= new Box(800,100) 
box15 = new Box(800,100)
box16 = new Box(800,100) 


//third row
box17 = new Box(900,100)
box18 = new Box(900,100) 
box19 = new Box(900,100)
box20 = new Box(900,100) 
box21 = new Box(900,100)
box22 = new Box(900,100) 
box23 = new Box(900,100)
box24 = new Box(900,100) 


pillar1 = new Pillar(750,580,35,500)
pillar2 = new Pillar(850,580,35,500)




}


function draw(){
background("lightblue")

Engine.update(engine)

ground.display();

push()
strokeWeight(0)
fill(255, 255, 0)
circle(sun.position.x,sun.position.y,120)
pop()
 
line(ball.position.x,ball.position.y,400,10)

push()
fill(75, 85, 87)
circle(ball.position.x,ball.position.y,140)
pop()



pillar1.display();
pillar2.display();



//first row
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();


//second row
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();



//third row
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();


}

function mouseDragged(){
Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}








