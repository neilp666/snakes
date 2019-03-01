
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

function setup() {
  createCanvas(400, 400)
  frameRate(10)
}

// head starts at the center of the screen
headX = numOfBlocks/2
headY = numOfBlocks/2

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