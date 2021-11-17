

var ground
var trex,trex_running;
var edges;
var ground_img;
var invisible_ground





function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_img = loadImage("ground2.png")

}

function setup(){

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5
  
  edges = createEdgeSprites();

  //Creating ground
  ground = createSprite(200,180,400,20)
  ground.addImage("ground",ground_img)

  //creating invisible ground
  invisible_ground = createSprite(200,190,400,20)
  invisible_ground.visible = false

}

  function draw(){
      background("yellow ")
      
      
     //space button   
      if(keyDown("space") && trex.y>=153){
      trex.velocityY = -7;
      
      }
      
    //trex gravity
    trex.velocityY= trex.velocityY + 0.5;

    //collide of trex
    trex.collide(invisible_ground)
    
    //ground movement
    ground.velocityX=-2

    // infinite ground
  
    if (ground.x<0  ){
    ground.x=ground.width/2
    }

    //trex.collide(edges)









drawSprites()

}

