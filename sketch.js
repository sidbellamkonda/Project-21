var bullet, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(20,85);

  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=color(255);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0;
    deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>130){
      wall.shapeColor=color(255,0,0);
    }
    /*if(deformation<180 && deformation>80){
      wall.shapeColor=color(230,230,0);
    }*/
    if(deformation<130){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}