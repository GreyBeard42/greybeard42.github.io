let x, y, newX, newY
let history = []

function setup() {
  const myCanvas = createCanvas(windowWidth-15, windowHeight-50)
  myCanvas.parent('canvas');
  addToHistory()
}

function draw() {
  background(200)
  stroke('black')

  if(frameCount % 3 == 0) {
    addToHistory()
  }

  updateGraph(history)
}

function addToHistory() {
  let event = {}
  event.value = round(random(0, 100))
  history.push(event)
}

function updateGraph(input) {
  let history = input
  x = 5
  y = history[0].value + windowHeight/2
  for(i = 1; i < history.length; i++) {
    newX = x+windowWidth/history.length
    newY = history[i].value
    // VVV map converts numbers to greater ranges VVV
    // map(input, inputBottom, inputTop, outputBottom, outputTop)
    newY = map(newY, 0, 100, 0, windowHeight/4) + windowHeight/2
    line(x, y, newX, newY)
    x = newX
    y = newY
  }
  if(history.length > 50) history.shift()
}