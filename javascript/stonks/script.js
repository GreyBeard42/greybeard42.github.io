let money, graphSize
let inventory = []
let stonks = {
  TSLA: [],
  AAPL: [],
  AMZN: [],
  MSFT: [],
  GME: [],
  RDDT: [],
  RIVN: []
}
let names = [
  'TSLA',
  'AAPL',
  'AMZN',
  'MSFT',
  'GME',
  'RDDT',
  'RIVN'
]
let colors = [
  {
    hex: '#de7171'
  },
  {
    hex: '#83ebe0'
  },
  {
    hex: '#c0db7b'
  },
  {
    hex: '#9ae384'
  },
  {
    hex: '#9087e0'
  },
  {
    hex: '#e3b47b'
  },
  {
    hex: '#e077cb'
  },
]

function setup() {
  const canvas = createCanvas(windowWidth-20, windowHeight*0.8)
  canvas.parent('graph')
  colorMode(HSB, 100)

  stonks.TSLA.push(random(1, 200))
  stonks.AAPL.push(random(1, 200))
  stonks.AMZN.push(random(1, 200))
  stonks.MSFT.push(random(1, 200))
  stonks.GME.push(random(1, 200))
  stonks.RDDT.push(random(1, 200))
  stonks.RIVN.push(random(1, 200))
  money = 1000
  graphSize = round(width/13)
  for(i=0; i<7; i++) {
    inventory.push(0)
  }
  
  setupButtons()
}

function draw() {
  background('#063627')

  addToAllGraphs()

  updateAllGraphs()

  stonkInfo()
}

function stonkInfo() {
  for(i = 0; i < 7; i++) {
    let scale = height/25
    fill(colors[i].hex)
    stroke(colors[i].hex)
    strokeWeight(height/1200)
    textSize(scale)

    let x = (i+1)*(width/8)
    let value
    if(i == 0) value = stonks.TSLA
    if(i == 1) value = stonks.AAPL
    if(i == 2) value = stonks.AMZN
    if(i == 3) value = stonks.MSFT
    if(i == 4) value = stonks.GME
    if(i == 5) value = stonks.RDDT
    if(i == 6) value = stonks.RIVN
    value = value[value.length-1]

    textAlign(RIGHT, TOP)
    text(inventory[i], (i+1.95)*width/8, 3)

    textAlign(LEFT, TOP)
    text(names[i], x+3, 3)
    text('$'+round(value, 2), x+3, 3+scale)

    stroke('#9adbc6')
    strokeWeight(height/400)
    line((i+1)*width/8, 0, (i+1)*width/8, height*0.09)
  }
  strokeWeight(height/250)
  line(0, height*0.09, width, height*0.09)
  line(0, height*0.9, width, height*0.9)

  fill('#9adbc6')
  strokeWeight(height/1200)
  textAlign(RIGHT, TOP)
  text('#', 0.95*width/8, 3)
  textAlign(LEFT, TOP)
  text('Name', 3, 3)
  text('$Val', 3, 3+height/25)

  strokeWeight(height/1000)
  textSize(height/20)
  textAlign(LEFT, BOTTOM)
  text('Current Money: '+fancyMoney(round(money, 2)), 3, height/40*39)
  textAlign(RIGHT, BOTTOM)
  text('Money Aftr Sell: '+fancyMoney(fakeMoney()), width-3, height/40*39)
}

function fakeMoney() {
  let sell = document.getElementById('sell').value
  let output = 0
  for(i=0; i<7; i++) {
    let list
    if(i == 0) list = stonks.TSLA
    if(i == 1) list = stonks.AAPL
    if(i == 2) list = stonks.AMZN
    if(i == 3) list = stonks.MSFT
    if(i == 4) list = stonks.GME
    if(i == 5) list = stonks.RDDT
    if(i == 6) list = stonks.RIVN

    output += min(sell, inventory[i])*list[list.length-1]
  }
  return(round(money+output, 2))
}

function addToAllGraphs() {
  if(frameCount % 3 == 0) {
    addToGraph(stonks.TSLA, 2.75)
    addToGraph(stonks.AAPL, 2.75)
    addToGraph(stonks.AMZN, 2.75)
    addToGraph(stonks.MSFT, 2.75)
    addToGraph(stonks.GME, 2.75)
    addToGraph(stonks.RDDT, 2.75)
    addToGraph(stonks.RIVN, 2.75)
  }
}

function updateAllGraphs() {
  updateGraph(stonks.TSLA)
  updateGraph(stonks.AAPL)
  updateGraph(stonks.AMZN)
  updateGraph(stonks.MSFT)
  updateGraph(stonks.GME)
  updateGraph(stonks.RDDT)
  updateGraph(stonks.RIVN)
}

function addToGraph(input, range) {
  let value
  value = input[input.length-1] + random(-range, range)
  if(value > 200) value = random(200, 200-range)
  if(value < 0) value = random(0, range)
  input.push(value)
  
  if(input.length > graphSize) input.shift()
}

function updateGraph(input) {
  let x, y, newX, newY
  let graph = input
  let id
  if(input == stonks.TSLA) id = 0
  if(input == stonks.AAPL) id = 1
  if(input == stonks.AMZN) id = 2
  if(input == stonks.MSFT) id = 3
  if(input == stonks.GME) id = 4
  if(input == stonks.RDDT) id = 5
  if(input == stonks.RIVN) id = 6
  
  stroke(colors[id].hex)
  strokeWeight(width/600)
  fill(colors[id].hex)
  x = 0
  y = map(graph[0], 200, 0, 0, height*0.77)+height*0.12
  for(i = 1; i < graph.length; i++) {
    newX = x+(width*0.925)/graphSize
    newY = graph[i]
    newY = map(newY, 200, 0, 0, height*0.77)+height*0.12
    line(x, y, newX, newY)
    x = newX
    y = newY
  }

  textSize(width/42)
  strokeWeight(width/2000)
  textAlign(LEFT, CENTER)
  text(names[id], x+8, y)
}

function fancyMoney(num) {
  let input = str(abs(num))
  let noFract = str(floor(abs(num)))
  let fract = abs(round(100*(num-ceil(num)), 2))
  if(str(fract).length == 1) fract = '0'+fract
  if(str(fract).length == 0) fract = '00'+fract
  let output = ''
  for(i = noFract.length; i > 0; i--) {
    output += noFract[noFract.length-i]
    if(i % 3 == 1 && i != 1) {
      output += ','
    }
  }
  output = output +'.'+ fract
  if(num < 0) output = '-$'+output
  if(num >= 0) output = '$'+output
  return(output)
}

function setupButtons() {
  for(i=0; i<7; i++) {
    let value
    if(i == 0) value = stonks.TSLA
    if(i == 1) value = stonks.AAPL
    if(i == 2) value = stonks.AMZN
    if(i == 3) value = stonks.MSFT
    if(i == 4) value = stonks.GME
    if(i == 5) value = stonks.RDDT
    if(i == 6) value = stonks.RIVN

    let id = i
    let buy = 'buy'+(i+1)
    document.getElementById(buy).onclick = function(){
      let change = document.getElementById('buy').value
      for(i=0; i<int(change); i++) {
        money -= value[value.length-1]
        inventory[id] += 1
      }
    }
    let sell = 'sell'+(i+1)
    document.getElementById(sell).onclick = function(){
      if(inventory[id] > 0) {
        let change = document.getElementById('sell').value
        for(i=0; i<change; i++) {
          if(inventory[id] > 0) {
            money += value[value.length-1]
            inventory[id] -= 1
          }
        }
      }
    }
  }
}