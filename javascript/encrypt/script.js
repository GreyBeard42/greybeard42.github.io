let inpt

function setup() {
  const myCanvas = createCanvas(windowWidth-15, windowHeight-50)
  myCanvas.parent('canvas');
  inpt = createInpt()
  print(inpt)
}

function draw() {
  background(232, 230, 223)
  fill(46, 45, 44)
  stroke(46, 45, 44)
  strokeWeight(1)
  textSize(25)
  let encoded = encode(inpt)
  let decoded = decode(encoded)
  text('Input:  '+inpt, 10, 30)
  text('Encoded:  '+encoded, 10, 60)
  text('Decoded:  '+decoded, 10, 90)
}

function encode(inpt) {
  let encoded = ''
  let asciiCodes = []
  //Convert to ASCII codes
  for(i = 0; i < inpt.length; i++) {
    asciiCode = unchar(inpt[i])
    asciiCodes.push(asciiCode)
  }

  //Convert list to single string
  for(i = 0; i < asciiCodes.length; i++) {
    let itm = asciiCodes[i]
    itm = itm.toString()
    encoded += itm.length
    encoded += itm
  }

  //Flip encoded string backwards
  let og = encoded
  encoded = ''
  for(i = og.length-1; i > -1; i--) {
    encoded += og[i]
  }

  return(encoded)
}

function decode(inpt) {
  decoded = ''
  //flip
  for(i = inpt.length-1; i > -1; i--) {
    decoded += inpt[i]
  }

  //Return to list
  let asciiCodes = []
  let index = 0
  while(index < decoded.length) {
    val = ''
    let len = decoded[index]
    for(i = 0; i < len; i++) {
      index++
      val += decoded[index]
    }
    index++
    asciiCodes.push(val)
  }

  //Convert ASCII to String
  decoded = ''
  for(i = 0; i < asciiCodes.length; i++) {
    decoded += char(asciiCodes[i])
  }
  
  return(decoded)
}

function createInpt() {
  let p1s = [
    'Ultra',
    'Stinky',
    'Weird',
    'Omega',
    'Sad',
    'Happy',
    'Sick',
    'Gross',
    'Strange',
    'Unnatural',
    'Perfect',
    'Grey',
    'Elongated'
  ]
  let p2s = [
    'Cat',
    'Dog',
    'Bird',
    'Script',
    'Python',
    'Beard',
    'Rat',
    'Bat',
    'Hat',
    'Computer',
    'Pizza',
    'Taco',
    'Burrito',
    'Gyro',
    'Store'
  ]
  let p1 = random(p1s)
  let p2 = random(p2s)
  return(p1 + ' ' + p2)
}