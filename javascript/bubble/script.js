let bubbles = []
let color = 0
let id = 0

function setup() {
  createCanvas(windowWidth-15, windowHeight*0.9)
  colorMode(HSB, 100)
  ellipseMode(CENTER)
}

function draw() {
  background('#021a12')

  if(mouseIsPressed) {
    color += 0.3
    color %= 100
    for(i=0; i<3; i++) {
      bubbles.push(new Bubble(mouseX, mouseY, color, id))
      id++
    }
  }
  bubbles.forEach(function(e) {
    if(!e.dead()) e.show()
  })
}

class Bubble {
  constructor(x, y, hue, id) {
    this.id = id
    this.pos = createVector(x, y)
    this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3))
    this.brightness = round(random(60, 80))
    this.hue = hue
    this.size = round(random(width/110, width/130))
    this.falling = false
  }
  show() {
    this.move()
    noStroke()
    fill(this.hue, 50, this.brightness)
    ellipse(this.pos.x, this.pos.y, this.size, this.size)
  }
  move() {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y

    if(this.falling) {
      this.vel.x/=1.03
      this.vel.y*=1.075
    } else {
      this.vel.x/=1.03
      this.vel.y/=1.03
    }
  }
  fall() {
    this.falling = true
    this.vel.y = height/500
  }
  dead() {
    if(this.pos.y > height || this.pos.y < 0) {
      return true
    } else if(this.pos.x > width || this.pos.x < 0) {
      return true
    }
    return false
  }
}

function reset() {
  bubbles.forEach(function(e) {
    e.fall()
  })
}