var dog;var happyDog;var dogImage;
var database;var foodStock;var foodS;

function preload()
{
  dogImage = loadImage("sprites/dogImg.png");
  happyDog = loadImage("sprites/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale=0.15;

   foodStock=database.ref ('food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);

 if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
textSize(30)
Stroke("red")
text("foodRemaining"+foodS,170,200)
text("pressUpArrow key ",130,10,300,20)
  drawSprites();
  //add styles here

}
function readStock(data){
foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}
