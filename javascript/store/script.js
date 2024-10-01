let storeName, storeMoney, tick, speed
let x, y, newX, newY, lowestHistory, highestHistory
let history = []
let store = [
  {
    name: 'cookie',
    cost: 2,
    bulkBuy: 20,
    bulkcost: 1
  },
  {
    name: 'apple',
    cost: 1.25,
    bulkBuy: 10,
    bulkcost: 1
  },
  {
    name: 'chips',
    cost: 1.25,
    bulkBuy: 15,
    bulkcost: 1
  },
  {
    name: 'banana',
    cost: 1,
    bulkBuy: 5,
    bulkcost: 0.75
  },
  {
    name: 'cake',
    cost: 10,
    bulkBuy: 3,
    bulkcost: 30
  },
  {
    name: 'watter bottle',
    cost: 1,
    bulkBuy: 24,
    bulkcost: 0.5
  },
]

function setup() {
  const myCanvas = createCanvas(windowWidth-15, windowHeight-50)
  myCanvas.parent('canvas');
  storeName = makeName()
  storeMoney = 1000
  highestHistory = 1500
  lowestHistory = 500
  speed = 1
  tick = 3

  for(i=0; store.length>i; i++) {
    store[i].stock = store[i].bulkBuy * 2
    store[i].buys = 0
    store[i].spent = 0
    store[i].avgCost = store[i].cost
    store[i].ogCost = store[i].cost
  }

  speed = createSlider(1, 10, 2);
  speed.position(width-140, height-10);
  speed.size(125);

  history.push(storeMoney)
}

function draw() {
  background(232, 230, 223)
  textSize(20)
  fill(46, 45, 44)
  stroke(46, 45, 44)
  strokeWeight(1)
  storeMoney = fixCost(storeMoney)
  text(storeName+' || Valued at: $'+storeMoney, 10, 25)
  strokeWeight(2)
  line(10, 42, windowWidth-20, 42)
  for(i=0; i<store.length; i++) {
    let y = 60+i*24
    strokeWeight(1)
    text(store[i].name+':', 10, y)
    text('$'+store[i].cost, 150, y)
    text('stock: '+store[i].stock, 275, y)
    strokeWeight(2)
    line(10, y+5, windowWidth-20, y+5)
  }
  strokeWeight(1)

  
  lowestHistory = storeMoney-250
  highestHistory = lowestHistory+500

  fill(214, 212, 206)
  strokeWeight(0)
  rect(10, windowHeight * 0.57, windowWidth - 30, windowHeight * 0.25)

  fill(46, 45, 44)
  strokeWeight(0.5)
  textSize(10)
  text('$'+round(highestHistory), 17, windowHeight*0.6)
  text('$'+round(lowestHistory), 17, windowHeight*0.8)

  strokeWeight(0.7)
  x = 55
  y = history[0]
  y = map(y, lowestHistory, highestHistory, windowHeight/5, 0) + windowHeight * 0.6
  for(i = 1; i < history.length; i++) {
    newX = windowWidth/history.length + x
    newY = history[i]
    newY = map(newY, lowestHistory, highestHistory, windowHeight/5, 0) + windowHeight * 0.6
    if(newX < windowWidth-40 && history[i] > lowestHistory) line(x, y, newX, newY)
    x = newX
    y = newY
  }

  if(history.length > 150) history.shift()
  
  doTick()
  
  textSize(20)
  text('Speed:', width-115, height-50)
}

function doTick() {
  visitor()
  stockup()
  inflation()
  history.push(storeMoney)
}

function inflation() {
  for(i=0; i<store.length; i++) {
    let item = store[i]
    if(item.stock > item.bulkBuy * 1.5) item.cost = fixCost(item.ogCost * 0.6)
    if(item.stock < item.bulkBuy * 1.25) item.cost = fixCost(item.ogCost * 1.4)
  }
}

function fixCost(num) {
  return(Math.ceil(num * 100) / 100)
}

function stockup() {
  for(i=0; i<store.length; i++) {
    let bulkCost = store[i].bulkBuy * store[i].bulkcost
    while(store[i].stock<store[i].bulkBuy / 2 && storeMoney - bulkCost > 500) {
      store[i].stock += store[i].bulkBuy
      storeMoney -= bulkCost
    }
  }
}

function visitor() {
  let item = store[bestDeal()]
  if(round(random(2.5)) == 1) item = random(store)
  
  if(round(random(1, 10/speed.value())) == 1 && item.stock > 0) {
    item.buys += 1
    item.spent += item.cost
    item.avgCost = item.spent / item.buys
    storeMoney += item.cost
    item.stock -= 1
  }
}

function bestDeal() {
  let deal = 0
  for(i = 0; i < store.length; i++) {
    if(store[i].avgCost - store[i].cost > store[deal].avgCost - store[deal].cost) deal = i
  }
  return(deal)
}

function makeName() {
  let names1 = [
    'Super',
    'Great',
    'Omega',
    'Professional',
    'Magical',
    'Old',
    'New',
    'Refreshing'
  ]
  let names2 = [
    'Industries',
    'Way',
    'Mart',
    'Zone',
    'Store',
    'Trust',
    'Organics'
  ]
  return(random(names1)+' '+random(names2))
}