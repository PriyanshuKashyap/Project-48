var pkbob, pkbobAnim, bgImage, bgSprite1, bgSprite2, virus, virusImg, rand, obstacleImg/*,obstacleSpr*/;
var citizens;
var pkbobstop;
var obstacleFrameCount = 150;
var numberOfGamesPlayed = 0;
var backgroundVelocityX = -6;
var virusVelocityX = -6;
//var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var gameState = "serve";
var edges;
var score = 50;
var count = 0;
var face1, face2;
var gameLaunch, playerProgress, gameSuccess, gameFailure;
function preload() {
  pkbobAnim = loadAnimation("ch_01.png", "ch_02.png", "ch_03.png", "ch_04.png", "ch_05.png", "ch_06.png", "ch_07.png", "ch_08.png");
  pkbobstop = loadAnimation("ch_01.png");
  bgImage = loadImage("InfScrollBg.jpg");
  //obstacleImg = loadImage("Obstacle" + rand + ".png");
  face1 = loadImage("face-with-mask.png");
  face2 = loadImage("face-with-mask-2.png");
  virusImg = loadImage("virus2.png");
  gameLaunch = loadSound("Initial Game Launch.wav");
  playerProgress = loadSound("Game Progress Sequencing.wav");
  gameSuccess = loadSound("game_success.wav");
  gameFailure = loadSound("game_over_failure.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites();
  pkbob = createSprite(400, 222, 50, 50);
  pkbob.addAnimation("pkbob", pkbobAnim);
  pkbob.addAnimation("pkbob2", pkbobstop);
  pkbob.scale = 0.18;
  pkbob.depth = 2;
  //windowWidth / 2
  //windowHeight - 400
  //windowWidth
  //windowHeight
  //bgSprite1 = createSprite(0, windowHeight / 2, windowWidth, windowHeight);
  bgSprite1 = createSprite(0, windowHeight / 2, windowWidth, windowHeight);
  bgSprite1.addImage("bgSpr1", bgImage);
  //bgImage.resize(windowWidth, windowHeight);
  //var bg = createSprite(0, 0, 1600, 800);
  //bg.shapeColor = "rgba(0, 0, 0, 0.5)";
  bgSprite1.depth = 1;
  //bgImage.width = windowWidth * 2.5;
  //bgImage.height = windowHeight;
  bgSprite1.scale = 1.5;
  bgSprite1.x = bgSprite1.width / 2;
  bgSprite1.velocityX = backgroundVelocityX;
  
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
  /*bgSprite2 = createSprite(1145, 125, width, height);
  bgSprite2.addAnimation("bgSpr2", bgImage);
  bgSprite2.depth = 1;
  bgSprite2.velocityX = -6;
  bgSprite1.debug = true;
  bgSprite2.debug = true;*/
  //pkbob.debug = true;
  //virusImg = loadImage("virus2.png");
  //virus = createSprite(random(0, width), random(0, height));
  virus = createSprite(600, 200);
  virus.addImage("virus", virusImg);
  virus.scale = 0.05;

  //virus.setVelocity(random(-30, 30), random(-30, 30));
  //obstacleSpr = createSprite(width - 10, 222);
  //rand = Math.round(1, 2);
  //obstacleSpr.addImage("obstacle", obstacleImg);
  //obstacleSpr.velocityX = -6;
  //obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
}

function draw() {
  //console.log(pkbob.y);
  //console.log("Game State: " + gameState, "Player visibility: " + pkbob.visible, "Background visibility: " + bgSprite1.visible, "Obstacle visibility: " + obstacleSpr.visible, "Virus visibility: " + virus.visible);
  //console.log("Player velocity: x = " + pkbob.velocityX + ", y = " + pkbob.velocityY, "Background velocity: x = " + bgSprite1.velocityX + ", y = " + bgSprite1.velocityY, "Obstacle velocity: x = " + obstacleSpr.velocityX + ", y = " + obstacleSpr.velocityY, "Virus velocity: x = " + virus.velocityX + ", y = " + virus.velocityY);
  //console.log(score);
  //console.log(numberOfGamesPlayed);
  //console.log("Virus: " + virus.isTouching(pkbob), virus.x, virus.y);
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
  //background(bgImage);
  //rand = Math.round(random(1, 6));
  //console.log(rand);
  //obstacleImg = loadImage("Obstacle" + rand + ".png");
  //obstacleSpr.addImage("obstacle", obstacleImg);
  //obstacleSpr.velocityX = -6;
  background(0);
  //bgSprite1 = createSprite(0, 125);
  //bgSprite1.addAnimation("bgSpr1", bgImage);
  //bgSprite1.depth = 1;
  //bgSprite1.x = bgSprite1.width / 2;
  //bgSprite1.velocityX = -6;
  //fill("white");
  //textSize(15);
  //text("Welcome to Mother Earth. As God has built us as citizens, we have a responsibility to promote sustainability, stewarship, and discipleship.", 0, 90);
  //text("Throughout this game, you will be tested on discipleship. It is a responsibility for all citizens to ensure health and safety and to avoid gatherings of such kind during this pandemic.", 0, 180);
  
  if (gameState === "serve") {
    serve();
  }
  
  if (gameState === "play") {
    play();
  }

  if (gameState === "pause") {
    pause();
  }

  if (gameState === "end") {
    end();
  }

  if (gameState !== "play") {
    count = 0;
    //fill("white");
    virus.visible = false;
    //textSize(16);
    //text("Score: " + score, width - 80, 13);
  }

  if (gameState === "quit") {
    quit();
  }

  

  drawSprites();
  fill("white");
  textSize(16);
  text("Score: " + score, width - 80, 13);
}

function keyPressed() {
  /*if (keyIsDown(LEFT_ARROW)) {
    pkbob.x = pkbob.x - 5;
  }*/

  /*if (keyIsDown(RIGHT_ARROW)) {
    pkbob.x = pkbob.x + 5;
  }*/
  if ((touches.length > 0 || keyIsDown(32)) && pkbob.y >= (windowHeight - 200)) {
    //if (keyCode === 38) {
    pkbob.velocityY = -200;
    touches = [];
    //playerProgress.play();
    //console.log(pkbob.y);
    //}
  } //else {
    //pkbob.velocityY = 5;
  //}

  if (keyIsDown(81)) {
    background(0);
    gameState = "quit";
  }
  
  //pkbob.velocityY = 5;

  /*if (keyIsDown(DOWN_ARROW)) {
    pkbob.y = pkbob.y + 5;
  }*/
  /*if (pkbob.y > 222) {
    pkbob.y = 222;
  }*/
  //pkbob.collide(bgSprite1);
}
//No issues(0)
function spawnObstacles() {
  if (count % obstacleFrameCount === 0) {
    //image(obstacle, width - 20, 222);
    //obstacleImg = loadImage("Obstacle" + rand + ".png");
    //obstacleSpr.x = width - 10;
    //obstacleSpr.changeImage("obstacle", obstacleImg);
    //rand = Math.round(random(1, 2));
    //obstacleImg = loadImage("Obstacle" + rand + ".png");
    //obstacleSpr = createSprite(width - 10, 222);
    citizens = createSprite(width - 10, 222);
    //obstacleSpr.velocityX = -6;
    citizens.velocityX = -6;
    rand = Math.round(random(1, 7));
    //obstacleSpr.visible = true;
    //obstacleSpr.addImage(face1);
    for (var i = 0; i <= rand; i++) {
      if (rand % 2 === 0 && rand >= 0) {
        /*obstacleSpr.addImage(face2);
        obstacleSpr.x = Math.round(random(10, width-10));
        obstacleSpr.y = Math.round(random(172, 222));*/

        citizens.addImage(face2);
        citizens.x = Math.round(random(10, width-10));
        citizens.y = Math.round(random(windowHeight - 280, windowHeight - 225));
      } else {
        /*obstacleSpr.addImage(face1);
        obstacleSpr.x = Math.round(random(10, width-10));
        obstacleSpr.y = Math.round(random(172, 222));*/

        citizens.addImage(face1);
        citizens.x = Math.round(random(10, width-10));
        citizens.y = Math.round(random(windowHeight - 280, windowHeight - 225));
      }
    }
    //obstaclekSpr.velocityX = -6;
    /*obstacleSpr.scale = 0.2;
    obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;*/

    citizens.scale = 0.2;
    citizens.lifetime = citizens.x / citizens.velocityX;
  }

  
}

function reset() {
  virus.visible = true;
  citizens.visible = true;
  //obstacleSpr.visible = true;
  virus.setVelocity(0, 0);
  citizens.setVelocity(0, 0);
  //obstacleSpr.setVelocity(0, 0);
  pkbob.setVelocity(0, 0);
  //bgSprite1.setVelocity
  pkbob.changeAnimation("pkbob", pkbobAnim);
  gameState = "serve";
}

function serve() {
  //background(bgImage);
  background("brown");
  //gameLaunch.play();
  //push();
  //gameLaunch.stop();
  //gameLaunch.play(); 
  //pop();
  //background(bgImage);
  bgSprite1.visible = false;
  pkbob.setVelocity(0, 0);
  obstacleFrameCount = 120;
  //pkbob.visible = true;
  if (numberOfGamesPlayed >= 1) {
    /*obstacleSpr.setVelocity(0, 0);
    obstacleSpr.visible = false;
    obstacleSpr.x = width - 10;
    obstacleSpr.y = 222;*/

    citizens.setVelocity(0, 0);
    citizens.visible = false;
    citizens.x = width - 10;
    citizens.y = 222;
    backgroundVelocityX = -6;
    virusVelocityX = -6;
    bgSprite1.setVelocity(backgroundVelocityX, 0);
    virus.setVelocity(virusVelocityX, random(-30, 30));
  }
    
  score = 50;
  //var bg = createSprite(0, 0, 1600, 800);
  //bg.shapeColor = "rgba(0, 0, 0, 0.001000)";
  //bg.shapeColor = "rgba(0, 0, 0, 0.000001)";
  push();
  //fill("black");
  fill("white");
  textSize(16);
  text("Overview: ", 0, 60);
  text("Welcome to Mother Earth. As God has built us as citizens, we have some responsibilities.", 0, 80);
  text("A responsible human should follow sustainability, stewarship, and discipleship.", 0, 100);
  //text("Throughout this game, you will be tested on discipleship. ", 0, 90);
  text("As responsible citizens, we must ensure health and safety by avoiding social gatherings and wearing masks.", 0, 120);

  text("Instructions: ", 0, 160);
  text("Use: 'space' for game resuming and 'r' for game pausing.", 0, 180);
  //fill("gold");
  text("Use features: (Mac: Control + Mouse + Inspect --> >> Console), (Windows: Right Click + Inspect --> >> Console)", 0, 200);
  text("for general game information records.", 0, 220);
  /*text("Your key information and feedback including your score will be recorded in the console", 0, 270);
  text("", 0, 290);*/
  //fill("grey");
  //text("Be sure to utilize this feature at the beginning and end slots of the game.", 0, 315);
  //fill("white");
  text("Be sure to utilize this feature at the beginning and end slots of the game.", 0, 240);
  text("Use: 'q' for game quitting.", 0, 260);
  //fill("brown");
  text("Press the key 'space' to continue.", 0, 340);
  pop();  
  pkbob.y = windowHeight - 200;
  if (keyIsDown(32)) {
    gameState = "play"; 
  }
}

function play() {
  //gameLaunch.play();
  //gameLaunch.stop();
  spawnObstacles();
  //image(bgImage, 0, windowHeight / 2, windowWidth, windowHeight);
  //background(bgImage);
  virus.setVelocity(virusVelocityX, random(-30, 30));
  virus.bounceOff(edges);
  bgSprite1.visible = true;
  bgSprite1.velocityX = backgroundVelocityX;
  //pkbob.visible = true;
  /*obstacleSpr.visible = true;
  obstacleSpr.velocityX = backgroundVelocityX;
  obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;*/

  citizens.visible = true;
  citizens.velocityX = backgroundVelocityX;
  citizens.lifetime = citizens.x / citizens.velocityX;
  //pkbob.y = 222;
  count++;
  score = score + 0.5;
  if (bgSprite1.x < 0) {
    bgSprite1.x = bgSprite1.width / 2;
    //bgSprite2.x = 1145;
  }

  /*if (keyIsDown(32)) {
    //if (keyCode === 38) {
    pkbob.velocityY = -5;
    //}
  }*/

  

  pkbob.velocityY = 5;
  if (pkbob.y > (windowHeight - 200)) {
    pkbob.y = windowHeight - 200;
  }
  //pkbob.collide(bgSprite1);
  //spawnObstacles();

  if (frameCount % 50 === 0) {
    virus = createSprite(600, random(10, height - 10));
    virus.addImage("virus", virusImg);
    virus.scale = 0.05;
    virus.setVelocity(virusVelocityX, random(-30, 30));
    virus.bounceOff(edges);
  }

  /*if (pkbob.isTouching(/*obstacleSpr*/ /*virus*/ /*)) {
    //bgSprite1.velocityX = 0;
    //obstacleSpr.velocityX = 0;
    //pkbob.velocityY = 0;
    //virus.setVelocity(0, 0);
    //score = score - 10;

    //gameState = "end";
    //console.log("Ensure you follow public health guidelines.", width / 2, 10);
  } else {
    console.log("Keep ensuring that public health guidelines are followed.", width / 2, 10);
  }*/

  if (keyIsDown(82)) {
    //obstacleSpr.setVelocity(0, 0);
    citizens.setVelocity(0, 0);
    pkbob.setVelocity(0, 0);
    virus.setVelocity(0, 0);
    bgSprite1.setVelocity(0, 0);
    gameState = "pause";
  }

  if (virus.isTouching(pkbob)) {
    virus = createSprite(pkbob.x, pkbob.y);
    virus.addImage("virus", virusImg);
    virus.scale = 0.05;
    virus.setVelocity(random(-30, 30), random(-30, 30));
    virus.bounceOff(edges);
    score -= 5;
    console.log("Ensure you follow public health guidelines.", width / 2, 10);
  } else {
    console.log("Keep ensuring that public health guidelines are followed.", width / 2, 10);
  }

  if (score % 100 === 0 && score >= 100) {
    //console.log(true);
    backgroundVelocityX -= 0.5;
    virusVelocityX -= 0.8;
    background.velocityX = backgroundVelocityX - 6;
    obstacleFrameCount -= 10;
    playerProgress.play();
    /*if (count % obstacleFrameCount === 0) {
      rand = Math.round(random(1, 6));
      obstacleImg = loadImage("Obstacle" + rand + ".png");
      obstacleSpr = createSprite(width - 10, 222);
      //obstacleSpr.visible = true;
      obstacleSpr.addImage("obstacle", obstacleImg);
      obstacleSpr.velocityX = -6;
      obstacleSpr.lifetime = obstacleSpr.x / obstacleSpr.velocityX;
    }*/
  }

  /*if (score % 100 === 0) {
    
  }*/

  if (score <= 0 || score >= 2000) {
    gameState = "end";
  }
}

function end() {
  background("black");
  bgSprite1.setVelocity(0, 0);
  bgSprite1.visible = false;
  virus.setVelocity(0, 0);
  virus.visible = false;
  citizens.setVelocity(0, 0);
  citizens.visible = false;
  //obstacleSpr.setVelocity(0, 0);
  //obstacleSpr.visible = false;
  pkbob.setVelocity(0, 0);
  pkbob.y = 300;
  pkbob.changeAnimation("pkbob2", pkbobstop);
  
  //pkbob.x = pkbob.x;
  //pkbob.y = pkbob.y;
  push();
  fill("red");
  //textSize(30);
  textStyle(BOLD);
  if (score <= 0) {
    //textSize(30);
    //textStyle(BOLD);
    /*text("Sorry to say, but you have clearly proven yourself an immoral and an irresponsible citizen by rejecting health guidelines and", (((width / 2) / 3) / 5), height/4);
    text(" performing relative immoral actions in life.", (((width / 2) / 3) / 5), height / 3);
    text("However, if you use life chances wisely, you can become a responsible citizen that is of highest expectations and are thus forgiven", (((width / 2) / 3) / 5), height/2.5);
    text(" from actions of immorality resulting in consequences. ", (((width / 2) / 3) / 5), height / 2.25);
    text("Remember, in life, failure means success, but it can not control after a point of limited extension.")
    text("Press the key 'r' for restarting purposes.", ((width / 2) / 3), height/2);*/
    text("Sorry to say, but you have clearly proven yourself an irresponsible citizen by rejecting health guidelines and", (((width / 2) / 3) / 5), height/5);
    text(" performing relative immoral actions in life resulting in consequences.", (((width / 2) / 3) / 5), height / 4);
    text("However, if you use life chances wisely, you can become a responsible citizen that is of highest expectations and are thus forgiven", (((width / 2) / 3) / 5), height/3);
    text(" from actions of immorality resulting in proper sustainabily and stewardship. ", (((width / 2) / 3) / 5), height / 2.6);
    text("Remember, in life, failure always means success, but success can not control failure after a point of limited extension.", (((width / 2) / 3) / 5), height / 2.25);
    text("Press the key 'r' for restarting purposes.", ((width / 2) / 3), height/2);
    push();
    fill("white");
    text("failure", 40, 40);
    pop();
    console.log("failure");
    //gameFailure.play();
  } 
  
  if (score >= 2000) {
    text("Dear responsible citizen, may God gift you eternal life and blessings after you have demonstrated responsibility and actions of", (((width / 2) / 3) / 5), height/4);
    text(" common good.", (((width / 2) / 3) / 5), height/3);
    text("With this, you have chosen to respect Mother Earth. You may choose to restart by pressing the key 'r'.", (((width / 2) / 3) / 5), height/2);
    push();
    fill(0, 255, 0);
    text("success", 40, 40);
    pop();
    console.log("success");
    //gameSuccess.play();
  }
  //text("Sorry to say, but you have clearly proven yourself an immoral and an irresponsible citizen.", ((width / 2) / 3), height/4);
  //text("Press the key 'r' for restarting purposes.", ((width / 2) / 3), height/2);
  //pop();
  numberOfGamesPlayed++;
  if (keyIsDown(82)) {
    //bgSprite1.visible = true;
    reset();
  }
  //reset();
  
}

function pause() {
  //obstacleSpr.setVelocity(0, 0);
  citizens.setVelocity(0, 0);
  virus.setVelocity(0, 0);
  bgSprite1.setVelocity(0, 0);
  count = count;
  if (keyIsDown(32)) {
    gameState = "play";
    count++;
  }
}

function quit() {
  background(255);
  pkbob.visible = false;
  //obstacleSpr.visible = false;
  bgSprite1.visible = false;
  push();
  fill("black");
  text("You have successfully quit the game.", width / 2, height / 2);
  pop();
}
