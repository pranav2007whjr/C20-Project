var BG
var Cat,CatImg,CatImg1,CatImg2 
var Mouse,MouseImg,MouseImg1,MouseImg2
function preload() {
    //load the images here
    BG=loadImage("images/garden.png")
    CatImg=loadAnimation("images/cat1.png")
    CatImg1=loadAnimation("images/cat2.png")
    CatImg2=loadAnimation("images/cat3.png")

    MouseImg=loadAnimation("images/mouse1.png")
    MouseImg1=loadAnimation("images/mouse2.png")
    MouseImg2=loadAnimation("images/mouse3.png")

}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   Cat=createSprite(870,600)
   Cat.addAnimation("catrest",CatImg)
   Cat.scale=0.2

   Mouse=createSprite(200,600)
   Mouse.addAnimation("mousestand",MouseImg)
   Mouse.scale=0.1
}

function draw() {

    background(BG);
    //Write condition here to evalute if tom and jerry collide
    if(Cat.x-Mouse.x<(Cat.width-Mouse.width)/2){
       Cat.velocityX=0;
       Cat.addAnimation("CatLastImage", CatImg2);
       Cat.x =300;
       Cat.scale=0.2;
       Cat.changeAnimation("CatLastImage");
       Mouse.addAnimation("MouseLastImage", MouseImg2);
       Mouse.scale=0.15;
       Mouse.changeAnimation("MouselastImage")    
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
   Cat.velocityX = -5;
   Cat.addAnimation("CatRunning", CatImg1);
   Cat.changeAnimation("CatRunning");}
 
   Mouse.addAnimation("Mousetease",MouseImg1)
   Mouse.changeAnimation("Mousetease")
}
