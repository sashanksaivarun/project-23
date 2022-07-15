const Engine = matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas;
var Player,Playerbase;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  Engine = engine.create();
  World = engine.world;
	
   //Create Player Base and Computer Base Object
   Playerbase = new Playerbase(300, random(450,height - 300),180,150);
   player = new Player(285,PlayerBase.position.y - 153,50,180);

    

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);





   //display Player and computerplayer


}
