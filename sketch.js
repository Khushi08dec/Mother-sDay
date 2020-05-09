var bgImg, heartImg, heart
var text1, text2, text2, text4, text5


function setup() {
  createCanvas(displayWidth-20, displayHeight-40)
  bgImg = loadImage("collage.jpg")
  heartImg = loadImage("Heart.png",60, 60)
  heart = createSprite(displayWidth/2-500, displayHeight/2, 60,60)
  heart.addImage(heartImg)
  heart.scale=0.5
  heart.visible = false
}

function draw() {
  background("white");
  tint(250, 210);
  image(bgImg, displayWidth/25, displayHeight/25, displayWidth-150, displayHeight-150);  
  
  fill("black");
  textSize(40);
  text("Happy Mother's Day Maa!!", displayWidth/2-200, displayHeight/2-280);
  textSize(35);
  text("You do so much for us, so here's is our way of saying thanks :)", displayWidth/2-500, displayHeight/2-230)
  textSize(30);
  text("Try spelling your name, and whichever chores comes up, Arnav and I will do for you!", displayWidth/2-520, displayHeight/2-190)  
   
  text("WE LOVE YOU!", displayWidth/2, displayHeight-350)
  cg1();
  cg2();
  cg3();
  cg4();
  cg5();
 drawSprites();
}

function cg1(){
    textSize(28);
    fill(237, 22, 74)

  if(keyCode===83){
    text("> Kapdhe Sukhana and Fold Karna", displayWidth/2-200, displayHeight/2-150);
      heart.visible = true;
      heart.x = displayWidth/2-500
  }

}

  function cg2(){

  if(keyCode===72){
    heart.visible = true;
    heart.x = displayWidth/2
  }
}

function cg3(){
  if(keyCode===73){
    text("> Kapdhe Sukhana and Fold Karna", displayWidth/2-200, displayHeight/2-150);
    text("> Folding Blankets", displayWidth/2-200, displayHeight/2-120);
    heart.visible = true;
    heart.x = displayWidth/2-500

  }
}

function cg4(){
  if(keyCode===75){
    text("> Kapdhe Sukhana and Fold Karna", displayWidth/2-200, displayHeight/2-150);
    text("> Folding Blankets", displayWidth/2-200, displayHeight/2-120);
    text("> Dusting, Jhadhu and Pocha", displayWidth/2-200, displayHeight/2-90);
    heart.visible = true;
    heart.x = displayWidth/2-500
  }
}


function cg5(){
  if(keyCode===65){
    text("> Kapdhe Sukhana and Fold Karna", displayWidth/2-200, displayHeight/2-150);
    text("> Folding Blankets", displayWidth/2-200, displayHeight/2-120);
    text("> Dusting, Jhadhu and Pocha", displayWidth/2-200, displayHeight/2-90);
    text("> Khana Lagana", displayWidth/2-200, displayHeight/2-60);
    text("anddd...", displayWidth/2-200, displayHeight/2-30);
    text("> Organising Any Drawers of Your Choice", displayWidth/2-200, displayHeight/2);
    text("> Help Make Lunch and Dinner", displayWidth/2-200, displayHeight-425);
    heart.visible = true;
    heart.x = displayWidth/2-500
  }
}
