let scale

function setupMap() {
  scale = min(windowWidth/2.5, windowHeight/2.5)
  cnvs = createCanvas(scale, scale)
  cnvs.parent(document.getElementById('map'))
}

function drawMap(m, plyr) {
  let p = scale/6
  for(x=0; x<6; x++) {
    let c = m[x]
    for(y=0; y<6; y++) {
      rectMode(CENTER)
      fill(c[y])
      noStroke()
      rect(p*y+p/2, p*x+p/2, p, p)
    }
  }

  fill(plyr)
  rect(scale/2, scale/2, scale/6, scale/6)

  scale-=2
  stroke('#9adbc6')
  strokeWeight(width/100)
  line(0, 2, 0, scale)
  line(0, 2, scale, 0)
  line(scale, 2, scale, scale)
  line(0, scale, scale, scale)
  scale+=2
}