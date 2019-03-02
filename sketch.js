
// set up number of blocks on the screen
var numOfBlocks = 20
// each block is 20px wide
var blockSize = 20

// snake's head position
var headX = 0
var headY = 0

// snake's head speed
var speedX = 0
var speedY = 0

// how long the snake is
var tailLength = 3
// tails contains old head's positions
var tails = []

// apple's position
var appleX = 0
var appleY = 0

// how many times snake eats apples
var score = 0
var hiscore = 0

function setup() {
  createCanvas(400, 400)
  frameRate(10)
}

// head starts at the center of the screen
headX = numOfBlocks/2
headY = numOfBlocks/2

// pick random number between 0 and numOfBlocks
appleX = round(random(0, numOfBlocks - 1 ))
appleY = round(random(0, numOfBlocks - 1 ))

function draw() {
  background(0, 0, 0)
  // draw the head
  fill(255)
  rect(headX * blockSize,
       headY * blockSize,
       blockSize,
       blockSize)
  // update the position of the snake's head
  headX = headX + speedX
  headY = headY + speedY

  // loop back inside the screen
  if(headX < 0) {
    headX = numOfBlocks
  }

  if(headX > numOfBlocks) {
    headX = 0
  }

  if(headY < 0) {
    headY = numOfBlocks
  }

  if(headY > numOfBlocks) {
    headY = 0
  }

  // add head's position to the tails array
  tails.push({x: headX, y: headY})
  // remove first tails when it's too long
  while(tails.length > tailLength) {
    tails.shift()
  }
  // draw all positions in tails array as rectangle
  for(var i = 0; i < tails.length; i++) {
    rect(tails[i].x * blockSize,
         tails[i].y * blockSize,
         blockSize,
         blockSize)
  }

  // draw the applie
  fill(255, 0, 0)
  rect(appleX * blockSize,
       appleY * blockSize,
       blockSize,
       blockSize)

  // when hitting the apple
  if(headX == appleX && headY == appleY) {
    appleX = round(random(0, numOfBlocks - 1 ))
    appleY = round(random(0, numOfBlocks - 1 ))
    tailLength++
    score++
  }
  // When the snake is moving
  if(speedX !=0 || speedY !=0) {
    for(var i = 0; i < tails.length - 1; i++) {
      if(headX == tails[i].x && headY == tails[i].y) {
        headX = numOfBlocks/2
        headY = numOfBlocks/2

        speedX = 0
        speedY = 0

        tails = []
        tailLength = 3

        appleX = round(random(0, numOfBlocks - 1 ))
        appleY = round(random(0, numOfBlocks - 1 ))

        // new hiscore
        if(score >= hiscore) {
          hiscore = score
        }
        score = 0
      }
    }
  }
  // draw both score and hiscore
  fill(255)
  text('score: ' + score, 0, 10)
  text('hiscore: ' + hiscore, 0, 20)
}

function keyPressed() {
  if(key == 'w') {
    speedX = 0
    speedY = -1
  } else if(key == 's') {
    speedX = 0
    speedY = 1
  } else if(key == 'a') {
    speedX = -1
    speedY = 0
  } else if(key == 'd') {
    speedX = 1
    speedY = 0
  }
}