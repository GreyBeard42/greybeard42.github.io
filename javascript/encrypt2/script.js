let input = document.getElementById('input')
let output = document.getElementById('output')
let copy = document.getElementById('copy')
let mode = 1
let encryptKey = Math.floor(Math.random() * 9)+1

function setup() {
  copy.addEventListener('click', function() {
    output.select()
    output.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(output.value)
  })
  input.addEventListener('keypress', function() {
    encryptKey = Math.floor(Math.random() * 9)+1
  })
}

function draw() {
  if(parseInt(input.value) > 0 && input.value[input.value.length-1] != 0) {
    output.value = decode(input.value)
  } else if(input.value != '') {
    output.value = encode(input.value)
  }
}

function encode(inpt) {
  let encoded = ''
  let asciiCodes = []
  let key = encryptKey
  encoded += key
  key = algorithm(key)
  //Convert to ASCII codes
  for(i = 0; i < inpt.length; i++) {
    asciiCode = unchar(inpt[i])+key
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
  let decoded = ''
  //flip
  for(i = inpt.length-1; i > -1; i--) {
    decoded += inpt[i]
  }
  if(!(parseInt(decoded) > 0)) {
    decoded = '1121'
  }

  //Return to list
  let asciiCodes = []
  let key = decoded[0]
  let index = 1
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
  key = algorithm(key)
  decoded = ''
  for(i = 0; i < asciiCodes.length; i++) {
    decoded += char(asciiCodes[i]-key)
  }
  return(decoded)
}

function algorithm(num) {
  num = floor(num)
  let indk = 0
  while(num != 1) {
    if(num % 2 == 0) {
      num /= 2
    } else {
      num *= 3
      num++
    }
    indk++
  }
  return indk
}
