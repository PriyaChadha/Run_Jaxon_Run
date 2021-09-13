var track, trackImg

var runner, runnerAnimation


function preload(){
  //pre-load images
  trackImg = loadImage("path.png")
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200, 20, 20)
  track.addImage("track", trackImg)
  track.scale = 1.5
  track.velocityY = 3


  runner = createSprite(200, 330, 20, 20)
  runner.addAnimation("runnerAnimation", runnerAnimation)
  runner.scale = 0.06

}

function draw() {
  background("white");

  if (track.y > 365) {
    track.y = 180
    
  }

  runner.x = World.mouseX

  drawSprites ()
}
