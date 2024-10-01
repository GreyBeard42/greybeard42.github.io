let filename, screen, add, save, canvas, canvasDiv
let images = []
let plants = []
let menu = []
let garden = []

function preload() {
  images.push(loadImage('plantImages/plant.png'))
  images.push(loadImage('plantImages/betterBoy.png'))
  images.push(loadImage('plantImages/bigBoy.png'))
  images.push(loadImage('plantImages/carmello.png'))
  images.push(loadImage('plantImages/superSweet100.png'))
  images.push(loadImage('plantImages/ace55.png'))
  images.push(loadImage('plantImages/beefsteak.png'))
  images.push(loadImage('plantImages/smallFruited.png'))
}

function setup() {
  screen = document.getElementById('screen')
  add = document.getElementById('add')
  add.style.visibility = 'hidden'
  save = document.getElementById('downloadButton')
  save.style.visibility = 'hidden'
  
  let unit = windowWidth/5
  let i = 5
  while(unit*7>windowWidth/2) {
    unit = windowWidth/i
    i++
  }
  cnvs = createCanvas(unit*6-15, unit*5-15)
  cnvs.parent('canvasDiv')
  let canvasDiv = document.getElementById('canvasDiv')
  rectMode(CORNERS)
  colorMode(HSB, 100)
  
  let load = document.getElementById('fileSelect')
  load.addEventListener('change', (event) => {
    filename = event.target.files[0].name
    let reader = new FileReader()
    reader.onload = onReaderLoad
    reader.readAsText(event.target.files[0])
    function onReaderLoad(event){
      plants = ''
      plants = JSON.parse(event.target.result)[0]
      garden = JSON.parse(event.target.result)[1]
      menu = JSON.parse(JSON.stringify(plants))
      
      canvasDiv.style.left = '50%'
      setupMenu()
    }
  })
}

function setupMenu() {
  let plantMenu = document.getElementById('plants')
  plantMenu.innerText = ''
  add.style.visibility = 'visible'
  save.style.visibility = 'visible'

  for(i=0; i<plants.length; i++) {
    createPlant(i)
  }

  function createPlant(i) {
    let item = document.createElement('div')
    item.id = 'plant'

    let itemId = document.createElement('a')
    itemId.innerText = '#'+(i+1)
    itemId.id = 'plantId'

    let itemTitle = document.createElement('input')
    itemTitle.value = plants[i].type
    itemTitle.id = 'itemTitle'
    itemTitle.placeholder = 'Title'

    let itemSubtitle = document.createElement('input')
    itemSubtitle.value = plants[i].lastWatered
    itemSubtitle.id = 'itemTitle'
    itemSubtitle.placeholder = 'Last Watered:'

    let itemDesc = document.createElement('textarea')
    itemDesc.id = 'itemDesc'
    itemDesc.value = plants[i].desc
    itemDesc.rows = 2
    itemDesc.col = 24
    itemDesc.placeholder = 'Description...'

    let itemX = document.createElement('input')
    itemX.type = 'number'
    itemX.value = plants[i].x
    itemX.placeholder = 'x'

    let itemY = document.createElement('input')
    itemY.type = 'number'
    itemY.value = plants[i].y
    itemY.placeholder = 'y'
    
    item.appendChild(itemTitle)
    item.appendChild(itemId)
    item.appendChild(itemSubtitle)
    item.appendChild(itemDesc)
    item.appendChild(itemX)
    item.appendChild(itemY)
    plantMenu.appendChild(item)

    setInterval(setMenu, 100, i)
    function setMenu(i) {
      if(i<menu.length) {
        menu[i].type = itemTitle.value
        menu[i].lastWatered = itemSubtitle.value
        menu[i].desc = itemDesc.value
        menu[i].x = itemX.value
        menu[i].y = itemY.value
      }
    }
  }
  
  add.addEventListener('click', function() {
    let newItem = {type: '', lastWatered: '', desc: '', x: '', y: '',}
    menu.push(newItem)
    plants = JSON.parse(JSON.stringify(menu))
    createPlant(menu.length-1)
  })
}

function downloadSave() {
  let dataStr = []
  dataStr.push(plants)
  dataStr.push(garden)
  dataStr = encodeURIComponent(JSON.stringify(dataStr));
  dataStr = "data:text/json;charset=utf-8," + dataStr
  var download = document.createElement('a');
  download.setAttribute("href",     dataStr     );
  download.setAttribute("download", filename);
  download.click();
  download.remove()
  console.log(plants)
}

function draw() {
  if(garden.length == 0) {
    background('#114230')
    textAlign(LEFT, TOP)
    textSize(width/20)
    text('Load JSON File', 15, 5)
  }
  customGarden()
  showPlants()
  plantInfo()

  if(plants != menu) {
    plants = JSON.parse(JSON.stringify(menu))
  }
}

function plantInfo() {
  fill('#c1edd2')
  stroke('#c1edd2')
  strokeWeight(width/1000)
  textSize(width/35)
  for(i=0; i<plants.length; i++) {
    let x = plants[i].x*width/600-width/88
    let y = plants[i].y*height/500-height/56
    if(dist(mouseX, mouseY, x, y) < width/25) { 
      if(y>40) y-=height/17
      else y+=height/17
      text('#'+(i+1), x, y)
    }
  }
}

function showPlants() {
  imageMode(CENTER)
  noSmooth()
  for(i=0; i<plants.length; i++) {
    fill('red')
    let x = plants[i].x*width/600
    let y = plants[i].y*height/500
    let type = plants[i].type
    let pimage
    if(type == 'Better Boy Tomato') {
      pimage = images[1]
    } else if(type == 'Big Boy Tomato'){
      pimage = images[2]
    } else if(type == 'Carmello Tomato'){
      pimage = images[3]
    } else if(type == 'Super Sweet 100 Tomato'){
      pimage = images[4]
    } else if(type == 'Ace 55 Tomato'){
      pimage = images[5]
    } else if(type == 'Beefsteak Tomato'){
      pimage = images[6]
    } else if(type == 'Small Fruited Tomato'){
      pimage = images[7]
    } else {
      pimage = images[0]
    }
    image(pimage, x, y, width/44.33*2, height/28*2)
  }
}

function customGarden() {
  noStroke()
  for(i=0; i<garden.length; i++) {
    fill(garden[i].color)
    rect(width*(garden[i].x1/100), height*(garden[i].y1/100), width*(garden[i].x2/100), height*(garden[i].y2/100))
  }
}