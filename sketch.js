// create car and wall variables
var car, wall;

//create speed and weight variables
var speed, weight

function setup() {
  
  //create canvas
  createCanvas(1600,400);
  
  //set random values for speed and weight
  speed=random(55,90)
	weight=random(400,1500)
  
  //display car on left of canvas
  car=createSprite(50, 200, 50,50); 
  
  //display wall
  wall=createSprite(1500,200, 60, height/2)
  
    //set car velocity
    car.velocityX = speed;

    //set car color
	  car.shapeColor=color(255);
  
    //set wall color
  	wall.shapeColor=color(80,80,80)
  
}

function draw() {
  
  //set background
  background(255,255,255);  
  
  //if car collides with wall...
   if(wall.x-car.x < (car.width+wall.width)/2)
  {
      car.velocityX=0;
      var deformation=0.5 * weight * speed* speed/22509;
      if(deformation>180)
      {
        car.shapeColor=color(230,230,0);
      }

      if(deformation<180 && deformation>100)
      {
        car.shapeColor=color(255,0,0);
      }

      if(deformation<100)
      {
        car.shapeColor=color(0,255,0);
      }
  }  
  
  //display sprites
  drawSprites();
  
}
