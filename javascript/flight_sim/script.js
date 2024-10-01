let altitude, going, speed, angle, gear, slide,  stalling, MAX_SPEED, gearPress, crashed, crashTime
let alrm, plane
let images = []

function preload() {
  images.push(loadImage('fly/p1-1.png'))
  images.push(loadImage('fly/p1-2.png'))
  images.push(loadImage('fly/p2-1.png'))
  images.push(loadImage('fly/p2-2.png'))
  images.push(loadImage('fly/p3-1.png'))
  images.push(loadImage('fly/p3-2.png'))
  images.push(loadImage('fly/grnd.png'))
}

function setup() {
  const myCanvas = createCanvas(windowWidth*0.4, windowWidth*0.4)
  myCanvas.parent('canvas');
  if(frameCount < 60) {
    alrm = new p5.Oscillator('sine')
    plane = new p5.Oscillator('sine') 
  }
  noSmooth()
  colorMode(HSB, 100)

  angle = 0
  speed = 0
  altitude = 0
  gear = 1

  slide = 0
  stalling = 0
  going = 0
  gearPress = 0

  crashed = 0

  plane.freq(0, 0.1)
  plane.amp(25, 1)
  plane.start()
}

function draw() {
  let sky = 95-altitude/25
  if(sky < 75) sky = 75
  background(50, 20, sky)

  //fix reload sound
  if(plane.started == false) plane.start()

  //ground
  let groundX = slide % width - width
  groundX = 0-groundX 
  let groundY = altitude/2
  image(images[6], groundX, groundY, width, height)
  image(images[6], groundX-width, groundY, width, height)

  //plane
  let angImg
  if(angle > 5) {
    angImg = 2
  } else if(angle < -5) {
    angImg = 4
  } else {
    angImg = 0
  }
  if(gear == 1) angImg++
  let planeY = height*0.45
  planeY -= altitude/20
  if(planeY < 5) planeY = 5
  image(images[angImg], width/5, planeY, width/1.5, height/1.8)

  plane.freq(speed/1.2+40, 0.1)

  //Info
  textSize(width/20)
  fill('#3d3f40')
  stroke('#3d3f40')
  strokeWeight(0.5)
  text('Altd: '+round(altitude)+'ft', 4, height/20)
  text('Angl: '+round(angle), 4, height/20*2)
  text('Spd: '+round(speed)+'kts', 4, height/20*3)
  if(gear == 1) {
    text('Gear: down', 4, width/20*4)
  } else {
    text('Gear: up', 4, width/20*4)
  }

  push()
  textAlign(RIGHT, CENTER)
  text('A-D : Engine', width-10, height/20)
  text('W-S : Flaps', width-10, height/20*2)
  text('  G : Gear', width-10, height/20*3)
  pop()

  //ALERTS

  if(crashed == 1) crash()

  strokeWeight(1)
  textSize(width/17)
  
  let stallALRT = stalling > 0
  let gearALRT = MAX_SPEED == 200 && altitude > 1000
  
  if(frameCount%120 < 60) {
    if(stallALRT) text('STALL', width/3, width/14)
  } else {
    if(gearALRT) text('GEAR', width/3, width/14)
  }

  let playn
  if(stallALRT || gearALRT) {
    playn = 1
  } else {
    playn = 0
  }

  alrm.freq(750, 0.1);
  alrm.amp(15, 1);
  
  if(frameCount%25 == 0 && playn == 1) alrm.start()
  if(frameCount%25 == 15 || playn == 0) alrm.stop()

  //Rules

  if(altitude < 5) {
    MAX_SPEED = 160
  } else if(gear == 1) {
    MAX_SPEED = 200
  } else {
    MAX_SPEED = 500
  }

  if(speed-1 > MAX_SPEED) speed -= 0.25

  if(crashed == 0) controls()

  if(going == 1 && speed < MAX_SPEED) speed += 0.2
  if(going == 0 && speed > 0) speed -= 0.4

  if(speed < 140 && altitude == 0) angle += 0-angle/20
  if(altitude <= 10) speed -= 0.02
  if(speed < 0) speed = 0
  if(speed > 145 && altitude == 0) angle += 0.2
  if(angle > 20 || angle < -20 && stalling == 0) {
    stalling = 1
    angle = -19
  }
  if(stalling > 0) {
    if(speed > 100) speed += 0.1
  }
  if(angle < -8 && altitude <= 0) crash(1)
  if(gear == 0 && altitude == 0) crash(1)
  if(stalling == 1 && angle > -1) stalling = 0

  if(speed < 50 && altitude > 0) altitude -= 0.25

  slide += speed/25

  if(altitude > -1) altitude += speed/5000*angle
  if(altitude < 0) altitude = 0

  if(gearPress > 0) gearPress++
  if(gearPress > 20) gearPress = 0
}

function controls() {
  if(keyIsPressed) {
    if(keyCode == 68) {
      //d
      going = 1
    }
    if(keyCode == 65) {
      //a
      going = 0
    }
    if(keyCode == 87) {
      //w
      if(altitude > 0) angle += 0.05
    }
    if(keyCode == 83) {
      //s
      angle -= 0.05
      if(altitude == 0) {
        if(speed > 50) speed -= 0.3
        angle += 0.05
      }
    }
    if(keyCode == 71 && gearPress == 0) {
      //g
      gearPress = 1
      if(gear == 1) {
        gear = 0
      } else {
        gear = 1 
      }
    }
  }
}

function crash(input) {
  if(input == 1) crashTime = frameCount
  
  crashed = 1
  speed = 0
  angle = 0
  altitude = 0
  gear = 1
  fill('black')
  rect(0, 0, width, height)
  strokeWeight(1)
  textSize(width/17)
  fill('white')
  stroke('white')
  text('You Crashed', 5, width/14)
  textSize(width/24)
  text('Reloading...', 5, width/8)
  
  if(frameCount-crashTime > 180) setup()
}