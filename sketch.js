const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop,rain = []
//var back;
var engine, world;
var ground,man;
var back,rain,light1,light2,light4, audio;
function preload(){
 back = loadImage("Sprites/back301.jpg");
 light1 = loadImage("Sprites/light1.png");
 light2 = loadImage("Sprites/light2.png");
 light4 = loadImage("Sprites/light4.png")

}
function setup() {
  var canvas =   createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

 //  back = new Back(0,0,0.01,0.0001);
  for(var i= 0;i<1000;i++){
    drop = new Drop(random(0,width),random(0,height));
    rain.push(drop);

  }

  ground =  new Ground(width/2,height,width,100);
  man = new Batman(width/2,height-200,200,height/2);
  light = createSprite(random(20,width-20),10,40,40)

   
}

function draw() {
  background(back); 
 // back.display();
    Engine.update(engine);
  for (var i = 0;i<rain.length;i++){
      rain[i].display();
      rain[i].updateFalling();
  }

  ground.display();
  man.display();

  var rand = Math.round(random(1,3))
  switch (rand) {
      case 1 : light.addImage(light1)
          
          break;

          case 2 : light.addImage(light2)
          
          break;

          case 3: light.addImage(light4)
          
          break;

  
      default:
          break;
  }

  drawSprites();
}