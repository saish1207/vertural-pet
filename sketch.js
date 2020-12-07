//Create variables here
var dog
var dogimag
var database
var dogHappy
var  foodStock
var foods
function preload()
{
  //load images here
 dogimag = loadImage("images/dogimg1.png")
 dogHappy  = loadImage("images/dogimg.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimag)
  dog.scale = 0.1

database = firebase.database()
foodStock = database.ref('food')
foodStock.on('value',readStock)

if(keyWentDown(UP_ARROW)){
 // writeStock(foods)
  dog.addImage(dogHappy)
}

}


function draw() {  
  background("green")

  drawSprites();
  //add styles here
  fill("white")
text("Note:Press UP_ARROW key To Feed Drago Milck",150,30)

}

function readStock(data){
  foods = data.val();
  }
  



