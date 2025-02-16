let scale, w, h, prevX, prevY
let wheat
let images = []
let map = []
let display = []

function preload() {
  for(i = 0; i<5; i++) {
    let image
    image = loadImage('images/wheat_'+i+'.png')
    images.push(image)
  }
}

function setup() {
  scale = 60
  w = floor(windowWidth/scale)
  h = floor(windowHeight/scale)
  createCanvas(w*scale, h*scale)
  colorMode(HSB, 100)
  noSmooth()
  imageMode(CENTER)
  
  for(x = 0; x < w; x++) {
    let column = []
    for(y = 0; y < h-1; y++) {
      let tile = {}
      tile.x = x*scale+scale*0.6
      tile.y = y*scale+scale*1.65
      tile.val = 0
      column.push(tile)
    }
    map.push(column)
  }
  
  prevX = 0
  prevY = 0
  wheat = 0
}

function draw() {
  if(mouseIsPressed) findMouse()
    
  //grow
  for(x = 0; x < w; x++) {
    for(y = 0; y < h-1; y++) {
      if(round(random(1, 750)) == 1) grow(x, y)
    }
  }

  if(display != map) update()
}

function findMouse() {
  let mousPosX = round(mouseX/scale-0.5)
  if(mousPosX < 0) mousPosX = 0
  if(mousPosX == w) mousPosX = w-1
  let column = map[mousPosX]

  let mousPosY = round(mouseY/scale-1.5)
  if(mousPosY < 1) mousPosY = 0
  if(mousPosX == h) mousPosX = h-1
  let id = column[mousPosY]
  if(id.val == 0) {
    id.val = 1
    display = []
  }
  if(id.val == 4) {
    id.val = 0
    display = []
    wheat++
  }
}

function update() {
  background('#554d4b')
  document.title = wheat+' Wheat'
  textSize(height/24)
  fill('#241d19')
  stroke('#241d19')
  strokeWeight(0.5)
  text('Wheat: '+wheat, 10, height/25)
  prevX = mouseX
  prevY = mouseY

  for(x = 0; x < w; x++) {
    for(y = 0; y < h-1; y++) {
      let column = map[x]
      let val = column[y].val
      let cx = column[y].x
      let cy = column[y].y
      image(images[val], cx, cy, scale*10, scale*8)
    }
  }
  display = map
}

function grow(x, y) {
  let column = map[x]
  let crop = column[y]
  if(crop.val < 4) {
    crop.val += 1
    display = []
  }
}