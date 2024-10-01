let x, y, newX, newY, speed
let history = []

function setup() {
  const myCanvas = createCanvas(windowWidth-15, windowHeight-50)
  myCanvas.parent('canvas');
  addToHistory() 
  textAlign(LEFT)
  speed = windowWidth/11
}

function draw() {
  background(200)
  stroke('black')

  if(frameCount % 2 == 0) {
    addToHistory()
  }

  if(history.length > speed-2) {
    updateGraph(history)
  } else {
    textAlign(CENTER)
    text('Loading...', width/2, height/2-40)
  }
  textAlign(LEFT)
  textSize(25)
  text('FPS: '+round(frameRate())+' | wWIDTH: '+round(windowWidth)+' | wHEIGHT: '+round(windowHeight)+' | '+month()+'/'+day()+'/'+year(), 10, height-20)
}

function addToHistory() {
  let event = {}
  event.value = frameRate() 
  history.push(event)
}

function updateGraph(input) {
  let history = input
  x = windowWidth-10
  y = history[0].value
  if(y == 0) y = speed
  y = map(y, 25, 100, windowHeight/4, 0) + windowHeight/4
  for(i = 1; i < history.length; i++) {
    newX = x-windowWidth/speed
    newY = history[i].value
    newY = map(newY, 25, 85, windowHeight/4, 0) + windowHeight/4
    line(x, y, newX, newY)
    x = newX
    y = newY
  }
  if(history.length > speed) history.shift()
}