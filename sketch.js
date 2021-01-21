var whale,whaleImg,kid1,kid2,kid3,alien1,alien2,alien3;
var kid=[];
var kidlength=2;
var alienLength=4;
var bg;
var background1;
var alien=[];
var kidsGroup;
var kids;
var aliensGroup;


function preload(){
bg=loadImage("beeach.png");
whaleImg=loadImage("whale.png")
alien1=loadImage("alien.png");
alien2=loadImage("alien2.png");
alien3=loadImage("alien_.png");
kid1=loadImage("kid.png");
kid2=loadImage("kid1.png");
kid3=loadImage("kid2.png");

}




function setup() {
  createCanvas(displayWidth,displayHeight);
  //background1 = createSprite(displayWidth/2,displayHeight/2,1000,2000);
//background1.addImage(bg);
//background1.scale=1.75; 
whale = createSprite(width/2,height-100);
whale.addImage(whaleImg);
whale.scale=0.325;
  

  
  kidsGroup=new Group();
  aliensGroup=new Group();
}

function draw() {
  
background(bg);
console.log();
whale.debug=true;

createAliens();
createKids();
moveWhale();

if(frameCount%1000==0){
  kidsGroup.destroyEach();
}
if(frameCount%400==0){
  aliensGroup.destroyEach();
}
if(whale.isTouching(kidsGroup)){
  whale.y=whale.y-2;
}
if(whale.isTouching(aliensGroup)){
  whale.y=whale.y+2;
}
  drawSprites();
}


function createKids(){
  if(frameCount%200===0){
    var y=Math.round(random(1,3));
    for(var i=0;i<=kidlength;i++){
      kids=createSprite(10,10,20,20);
      kids.x=Math.round(random(10,width-100));
      kids.y=Math.round(random(100,height-100));
      kidsGroup.add(kids);
      kids.debug=true;
     
      
      switch(y){
        case 1:{
          kids.addImage(kid1);
          kids.scale=0.25;
          break
        }
        case 2:{
          kids.addImage(kid2);
          kids.scale=0.25;
          break
        }
        case 3:{
          kids.addImage(kid3);
          console.log(kid3);
          kids.scale=0.25;
          break
         }
         
        

      }
      
    }
  }
  
}

function moveWhale(){
  if(keyDown(UP_ARROW)){
    whale.y=whale.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    whale.y=whale.y+0.075;
  }
  if(keyDown(LEFT_ARROW)){
    whale.x=whale.x-0.075;
  }
  if(keyDown(RIGHT_ARROW)){
    whale.x=whale.x+3;
  }
}

function createAliens(){
  if(frameCount%500===0){
    var r=Math.round(random(1,3));
    for(var i=0;i<=alienLength;i++){
      aliens=createSprite(10,10,20,20);
      aliens.x=Math.round(random(10,width-100));
      aliens.y=Math.round(random(100,height-100));
      aliensGroup.add(aliens);
      aliens.debug=true;
     
      
      switch(r){
        case 1:{
          aliens.addImage(alien1);
          aliens.scale=0.25;
          break
        }
        case 2:{
          aliens.addImage(alien2);
          aliens.scale=0.25;
          break
        }
        case 3:{
          aliens.addImage(alien3);
          aliens.scale=0.25;
          break
         }
         
        

      }
      
    }
  }
  
}
