const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const circle = Matter.Body.circle;

var drops = [];
var maxDrops = 200;
var umbrella;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4;

function preload(){
    
thunderImg1 = loadImage("images/images/thunderbolt/1.png");
thunderImg2 = loadImage("images/images/thunderbolt/2.png");
thunderImg3 = loadImage("images/images/thunderbolt/3.png");
thunderImg4 = loadImage("images/images/thunderbolt/4.png");

}

function setup(){
createCanvas(500,800);
engine = Engine.create();
world = engine.world;

for(var i = 0;i<maxDrops; i++){

drops.push(new Drop(random(0,500),random(-100,300),10));

}

umbrella = new Umbrella(250,650,100,100)


}

function draw(){
background(0)
Engine.update(engine);
umbrella.display()

for(var i = 0;i<maxDrops; i++){

    drops[i].display();
    drops[i] .update();
    
}


makeThunderBolt();
//console.log(mouseX,mouseY);
drawSprites();
}   
function makeThunderBolt(){


    if(frameCount % 50 === 0) {
        var thunder = createSprite(random(200,400),100,10,40);
        //obstacle.debug = true;
        
        
        //generate random obstacles
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(thunderImg1);
                  break;
          case 2: thunder.addImage(thunderImg2);
                  break;
          case 3: thunder.addImage(thunderImg3);
                  break;
          case 4: thunder.addImage(thunderImg4);
                  break;
          default: break;
        }
        thunder.scale = 0.7;
        thunder.lifetime = 30;
      }


}