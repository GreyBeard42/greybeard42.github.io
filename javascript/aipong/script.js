let user, bot, brain, ball

function setup() {
  let cnvs = createCanvas(windowWidth-15, windowHeight*0.9-15)
  cnvs.parent('canvas')
  textAlign(CENTER)
  rectMode(CENTER)

  user = new Paddle(width/50)
  bot = new Paddle(width-width/50)
  brain = new Brain()
  ball = new Ball()
}

function draw() {
  background('#021a12')
  noStroke()
  
  user.y += (mouseY-user.y)/5
  bot.y += (brain.run()-bot.y)/5
  ball.move()

  //brain.show()
  fill('#9adbc6')
  textSize(width/20)
  text(user.score+' - '+bot.score, width/2, width/20)
  ball.draw()
  user.draw()
  bot.draw()
}

class Paddle {
  constructor(x) {
    this.score = 0
    this.x = x
    this.y = height/2
    this.width = width/80
    this.height = width/15
  }
  draw() {
    rect(this.x, this.y, this.width, this.height)
  }
}

class Brain {
  constructor() {
    this.data = {ballY: [height/2], response: [height/2], success: [true]}
    this.differ = 0
    this.output = width/2
    this.bestResponse = 0
  }
  run() {
    //best response
    let bestDiffer = height
    for(let i=0; i<this.data.ballY.length; i++) {
      let temp = abs(round(ball.y+ball.yvel-this.data.ballY[i]))
      if(temp < bestDiffer) {
        this.bestResponse = i
        bestDiffer = temp
      }
    }

    //figure pos
    let differRange
    if(this.data.success[this.bestResponse]) {
      differRange = height/10
    } else {
      differRange = height/2
    }
    this.differ += random(0-differRange/14, differRange/14)
    
    if(this.output > height-bot.height/2) this.differ = height-bot.height/2-this.data.response[this.bestResponse]
    if(this.output < bot.height/2) this.differ = bot.height/2+this.data.response[this.bestResponse]
    
    while(this.differ > differRange) {
      this.differ -= 1
    }
    while(this.differ < 0-differRange) {
      this.differ += 1
    }

    this.output = round(this.data.response[this.bestResponse]+this.differ)
    return(this.output)
  }
  show() {
    for(let i=0; i<this.data.success.length; i++) {
      push()
      stroke('black')
      rectMode(CENTER)
      if(this.data.success[i]) {
        fill('green')
      } else {
        fill('red')
      }
      rect(width-width/25, this.data.response[i], width/50, width/50)
      pop()
    }
  }
  updateKnowledge(s) {
    if(s && !this.data.success[this.bestResponse]) {
      brain.data.ballY[this.bestResponse] = this.y
      brain.data.success[this.bestResponse] = true
      brain.data.response[this.bestResponse] = brain.output
    } else {
      brain.data.ballY.push(this.y)
      brain.data.success.push(s)
      brain.data.response.push(brain.output)
    }
  }
}

class Ball {
  constructor() {
    this.x = width/2
    this.y = height/2
    this.xvel = 0-width/200
    this.yvel = 0
    this.width = width/50
    this.height = width/50
  }
  move() {
    this.x+=this.xvel
    this.y+=this.yvel
    if(collision(this, user) && this.x > user.width) {
      this.xvel = 0-this.xvel
      this.yvel = (this.y-user.y)/5
      while(collision(this, user)) {
        this.x+=this.xvel
        this.y+=this.yvel
      }
    } else if(collision(this, bot) && this.x < width-bot.width) {
      this.xvel = 0-this.xvel
      this.yvel = (this.y-bot.y)/5
      brain.updateKnowledge(true)
      while(collision(this, user)) {
        this.x+=this.xvel
        this.y+=this.yvel
      }
    }
    if(this.y < this.height || this.y > height-this.height) {
      this.yvel = 0-this.yvel
      while(collision(this, user)) {
        this.x+=this.xvel
        this.y+=this.yvel
      }
    }
    if(this.x > width) {
      this.x = width/2
      this.y = height/2
      this.yvel = 0
      user.score++
      brain.updateKnowledge(false)
    } else if(this.x < 0) {
      this.x = width/2
      this.y = height/2
      this.yvel = 0
      bot.score++
    }
  }
  draw() {
    rect(this.x, this.y, this.width, this.height)
  }
}

function collision(a, b) {
  return((dist(a.x, 0, b.x, 0) < a.width/2+b.width/2) && (dist(a.y, 0, b.y, 0) < a.height/2+b.height/2))
}
