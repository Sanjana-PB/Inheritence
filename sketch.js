const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, pig1 ,ground,log1 , bird;
var box3 , box4 , pig2, log2;
var box5 , log3 , log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

 ground = new Ground(600,380,1200,20);

 box1 = new Box(700,320,70,70);
 box2 = new Box(920,320,70,70);
 pig1 = new Pig(810,320);
 log1 = new Log(810,260,600,PI/2);

 box3 = new Box(700,240,70,70);
 box4 = new Box(920,240,70,70);
 pig2 = new Pig(810,220)
 log2 = new Log(810,180,600,PI/2);
 box5 = new Box(810,160,70,70);
 log3 = new Log(760,120,300,PI/7);
 log4 = new Log(860,120,300,-PI/7);

 bird = new Birds(200,50);

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();

    bird.display();
}