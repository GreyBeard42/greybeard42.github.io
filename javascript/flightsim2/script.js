let game

function setup() {
    let cnvs = createCanvas(windowWidth-15, windowHeight*0.9-15)
    cnvs.parent('canvas')

    colorMode(HSB, 100)
    angleMode(DEGREES)
    ellipseMode(CORNERS)
    game = new Game()
}

function draw() {
    game.draw()
    game.controlls()
    game.physics()
}

class Spinny {
    constructor(val, mini, max, x, y, w, h=w) {
        push()
        let radius = min(w, h) / 2
        this.handRadius = radius * 0.6

        this.secondAngle = map(abs(val), mini, max, 0, 360);

        translate(x/2, y/2)
        rotate(this.secondAngle)
        line(0, 0, 0, -this.handRadius)
        pop()
    }
}

class Game {
    constructor() {
        this.updateTime()

        this.angle = {x: 0, y: 0}
        this.speed = 0
        this.dir = 0
        this.altitude = 0
        this.momentum = {speed: 0, alt: 0,}

        this.flaps = 0
        this.throttle = {x: 0, y: 0}
        this.engine = 10
        this.gear = true
        this.splr = false
        this.brakes = false

        this.spinnies = [0, 0, 0]

        this.cntrlWait = []
        let keys = [
            {n: '+', w: 10, k: [107, 187]},
            {n: '-', w: 10, k: [109, 189]},
            {n: 'f', w: 8, k: [70]},
            {n: 'b', w: 20, k: [66]},
            {n: 'g', w: 20, k: [71]}
        ]
        keys.forEach((e) => {
            let item = {}
            item.name = e.n
            item.wait = e.w
            item.last = 0
            item.keys = e.k
            this.cntrlWait.push(item)
        })
    }
    updateTime() {
        let time = new Date()
        this.time = (time.getHours()*60*60)+(time.getMinutes()*60)+(time.getSeconds())
        //for testing
        //this.time+=100
        this.time %= 24*60*60
        this.sky = this.time-(24*60*60/2)
        this.sky %= (24*60*60)
        this.sky = this.sky/(24*60*60/20)
        let temp = this.sky
        this.sky = {}
        this.sky.hue = Math.abs(temp)+55
        this.sky.bri = 95-Math.abs(temp)*5
    }
    skybox() {
        push()
        this.updateTime()

        rectMode(CENTER)
        noStroke()
        fillGradient('linear', {
            from : [width/2, 0],
            to : [width/2, height],
            steps : [
                color(this.sky.hue-5, 40, this.sky.bri),
                color(this.sky.hue+5, 40, this.sky.bri)
            ]
        })
        rect(width/2, height/2, width, height)
        pop()
    }
    ground() {
        push()
        translate(0, height*(this.angle.y/40+0.5))
        rotate(-this.angle.x)
        fill(40, 40, 60)
        stroke(40, 60, 50)
        strokeWeight(height/150)
        rectMode(CORNERS)
        rect(-width*2, 0, width*2, height*2)

        translate(width*((0-this.dir/180%180)+0.5), 0)
        let temp = min((this.altitude+1), width*0.98)
        fill(40, 2, 55)
        stroke(40, 2, 45)
        beginShape()
        vertex(-width+temp, height*1.5)
        vertex(0, 0)
        vertex(width-temp, height*1.5)
        vertex(-width+temp, height*1.5)
        endShape()

        //CENTER LINES
        stroke(40, 2, 65)
        strokeWeight(width/(this.altitude/2+100))
        //line(0, 0, 0, height)

        pop()
    }
    atitudIndctr() {
        push()
        rectMode(CENTER)

        //white lines
        stroke('white')
        strokeWeight(height/350)
        for(let i=4.5; i>0; i-=1) {
            line(width*0.48, height*(i/10), width*0.52, height*(i/10))
            line(width*0.4, height*(i/10-0.05), width*0.6, height*(i/10-0.05))
        }
        for(let i=5.5; i<10; i++) {
            line(width*0.48, height*(i/10), width*0.52, height*(i/10))
            line(width*0.4, height*(i/10+0.05), width*0.6, height*(i/10+0.05))
        }
        strokeWeight(width/300)
        line(width/2, height*0.33, width/2, height*0.67)
        
        //yellow chunk

        stroke('yellow')
        strokeWeight(width/150)
        line(width*0.35, height/2, width*0.45, height/2)
        line(width*0.45, height/2, width*0.45, height*0.53)
        line(width*0.65, height/2, width*0.55, height/2)
        line(width*0.55, height/2, width*0.55, height*0.53)

        noStroke()
        fill('yellow')
        rect(width/2, height*0.51, width/80, width/80)

        pop()
    }
    engineIndctr() {
        push()

        translate(0, height-width/10-5)
        noFill()
        stroke('white')
        strokeWeight(width/250)
        //Speed
        ellipse(5, 5, width/10)
        this.spinnies[0] += (this.engine-this.spinnies[0])/10
        new Spinny(this.spinnies[0], 0, 100, 5+width/10, 5+width/10, width/10)

        pop()

        push()

        translate(0, height-width/10-5)
        noStroke()
        fill('white')
        textAlign(CENTER, TOP)
        textSize(width/90)
        text('RPM',3+width/20, 5+width/19)

        textAlign(CENTER, TOP)
        text('0', width/20+3, 10)
        textAlign(RIGHT, CENTER)
        text('25', width/10-5, width/20+5)
        textAlign(CENTER, BOTTOM)
        text('50', width/20+3, width/10-5)
        textAlign(LEFT, CENTER)
        text('75', 10, width/20+5)

        pop()
    }
    speedIndctr() {
        push()
        translate(width/10+5, height-width/10-5)
        noFill()
        stroke('white')
        strokeWeight(width/250)
        //Speed
        ellipse(5, 5, width/10)
        this.spinnies[1] += (this.speed-this.spinnies[1])/10
        new Spinny(this.spinnies[1], 0, 600, 5+width/10, 5+width/10, width/10)

        pop()

        push()

        translate(width/10+5, height-width/10-5)

        noStroke()
        fill('white')
        textAlign(CENTER, TOP)
        textSize(width/90)
        text('Knots',3+width/20, 5+width/19)

        textAlign(CENTER, TOP)
        text('0', width/20+3, 10)
        textAlign(RIGHT, CENTER)
        text('150', width/10-5, width/20+5)
        textAlign(CENTER, BOTTOM)
        text('300', width/20+3, width/10-5)
        textAlign(LEFT, CENTER)
        text('450', 10, width/20+5)

        pop()
    }
    altitudeIndctr() {
        push()
        translate(width/5+10, height-width/10-5)
        noFill()
        stroke('white')
        strokeWeight(width/250)
        //Speed
        ellipse(5, 5, width/10)
        new Spinny(this.altitude, 0, 1000, 5+width/10, 5+width/10, width/10)
        new Spinny(this.altitude, 0, 10000, 5+width/10, 5+width/10, width/20)

        pop()

        push()

        translate(width/5+10, height-width/10-5)

        noStroke()
        fill('white')
        textAlign(CENTER, TOP)
        textSize(width/90)
        text('ALT',3+width/20, 5+width/19)

        textAlign(CENTER, TOP)
        text('0', width/20+3, 10)
        textAlign(RIGHT, CENTER)
        text('250', width/10-5, width/20+5)
        textAlign(CENTER, BOTTOM)
        text('500', width/20+3, width/10-5)
        textAlign(LEFT, CENTER)
        text('750', 10, width/20+5)

        pop()
    }
    draw() {
        background(0)

        this.skybox()
        this.ground()
        this.atitudIndctr()
        this.engineIndctr()
        this.speedIndctr()
        this.altitudeIndctr()

        let y = 5
        fill('white')
        textAlign(RIGHT, BOTTOM)
        textSize(width/40)
        let splr = 'SPLR RET'
        if(this.splr) splr = 'SPLR DEP'
        text(splr, width-5, height-y)
        y+=width/40
        let brakes = 'BRAKES'
        if(this.brakes) brakes = 'BRAKES ON'
        text(brakes, width-5, height-y)
        y+=width/40
        let gear = 'GEAR UP'
        if(this.gear) gear = 'GEAR DOWN'
        text(gear, width-5, height-y)
        y+=width/40
        text(this.flaps+'/8 flaps', width-5, height-y)
        y+=width/40
    }
    controlls() {
        this.cntrlWait.forEach((e) => {
            if(frameCount-e.last > e.wait) {
                let pressed = false
                e.keys.forEach((k) => {
                    if(keyIsDown(k)) {
                        pressed = true
                    }
                })
                if(pressed) {
                    e.last = frameCount
                    if(e.name === '+') this.engine = min(this.engine+10, 100)
                    if(e.name === '-') this.engine = max(this.engine-10, -70)
                    if(e.name === '-') this.engine = max(this.engine-10, -70)
                    if(e.name === 'f') this.flaps = (this.flaps+1)%(8+1)
                    if(e.name === 'b') {
                        if(this.splr) this.splr = false
                        else this.splr = true
                    }
                    if(e.name === 'g') {
                        if(this.altitude > 20) {
                            if(this.gear) this.gear = false
                            else this.gear = true
                        }
                    }
                }
            }
        })
        if(keyIsDown(32)) this.brakes = true
        else this.brakes = false
        this.throttle.x = mouseX-width/2
        this.throttle.y = mouseY-height/2
    }
    physics() {
        //speed
        let maxSpd = 3
        if(this.gear) maxSpd -= 0.1
        maxSpd -= this.angle.y/8
        let temp = round(this.engine*maxSpd-this.speed)
        this.speed += temp/700
        if(this.splr) this.speed -= temp/600
        if(this.brakes && this.altitude == 0) this.speed -= 0.1

        //angle y
        let y = map(this.throttle.y/map(this.speed, 125, 600, 100, 0), -height/2, height/2, -90, 90)
        this.angle.y += ((y+this.angle.y+(this.flaps/50))-this.angle.y)/30
        if(this.altitude < 0 && this.angle.y<0) this.angle.y += (0-this.angle.y)/50*abs(this.altitude)
        if(this.altitude == 0 && this.speed < 125) this.angle.y = 0
        
        //angle x
        let x = map(this.throttle.x/map(this.speed, 125, 600, 100, 0), -width/2, width/2, -50, 50)
        this.angle.x += ((x+this.angle.x)-this.angle.x)/10
        if(this.altitude < 0 && Math.abs(this.angle.x)>0) this.angle.x += (0-this.angle.x)/25
        if(this.altitude == 0 && this.speed < 125) this.angle.x = 0
        this.angle.x *= 1.0001

        //altitude
        this.altitude += this.angle.y*this.speed/1000
        if(this.altitude < 0) {
            this.altitude = 0
            this.angle.y = 0
            this.angle.x = 0
        }

        //dir
        this.dir += this.angle.x/100
    }
}
