let ognum = [42, 100, 50, 63, 76, 7, 50, 69, 6, 21, 30, 72, 42, 13, 73, 69, 67, 69, 69, 99, 27, 69, 69, 96, 57, 69, 69, 69, 72, 27, 58, 56, 1, 8, 3, 69, 15, 66, 7, 43, 22, 42, 12, 73, 79, 99, 96, 36, 6, 1, 100, 57, 14, 51, 2, 137, 50, 69, 2, 10, 69, 11, 50, 54, 69, 69, 7, 37, 97, 69, 69, 12, 43, 57, 37, 28, 21, 39, 69, 50]

let num = [42, 100, 50, 63, 76, 7, 50, 69, 6, 21, 30, 72, 42, 13, 73, 69, 67, 69, 69, 99, 27, 69, 96, 57, 72, 27, 58, 56, 1, 8, 3, 15, 66, 7, 43, 22, 42, 12, 73, 79, 99, 96, 36, 6, 1, 100, 57, 14, 51, 2, 137, 50,2, 10, 69, 11, 50, 54, 7, 37, 97, 12, 43, 57, 37, 28, 21, 39, 50]
let abc = ['a', 'a', 'a', 'x', 'f', 'z', 's', 'd', 'd', 'z', 'a', 'q', 'a', 'm', 'q', 'x', 'f', 'i', 'z', 'o', 'z', 't', 'k', 'b', 'y', 'l', 'z', 's', 'a', 'd', 'p', 'j', 'a', 'b', 'a', 'j', 'c', 's', 'g', 'w', 'n', 'd', 'g', 'h', 'b', 'z', 'b', 'b', 'i', 't', 'k', 'a', 'z', 'x', 'l', 't', 'm', 't', 'q', 'b', 'p', 'a', 'i', 'j', 'd', 'a', 'd', 'b', 'b', 'n', 's', 's', 'r', 'z', 'b', 'u', 'v', 'q', 'f', 'x']
let button = document.getElementById('switch')
let items
//num = ognum
document.getElementById('total').innerText = Math.round(num.length/10)*10

button.addEventListener('click', () => {
  if(button.innerText == 'abc') button.innerText = 'num'
  else button.innerText = 'abc'
  
  background('#021a12')
  if(button.innerText == 'abc') {
    graph(num, 0)
    document.getElementById('abc').style.display = 'none'
    document.getElementById('num').style.display = 'initial'
    document.getElementById('total').innerText = Math.round(num.length/10)*10
  } else {
    graph(abc, '')
    document.getElementById('abc').style.display = 'initial'
    document.getElementById('num').style.display = 'none'
    document.getElementById('total').innerText = Math.round(abc.length/10)*10
  }
})

function replace(e, val=parseInt(e.innerText)+1) {
  e.innerText = val
}

function isPrime(value) {
  if (value == 1) return false;
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

num.forEach((n) => {
  if(n%2==0) replace(document.getElementById('even'))
  if(n%2==1) replace(document.getElementById('odd'))
  if(isPrime(n)) replace(document.getElementById('prime'))
  //replace(document.getElementById('avg'))
  if(n%10==0) replace(document.getElementById('ten'))
  if(n%5==0) replace(document.getElementById('five'))
  if(n%9==0) replace(document.getElementById('nine'))
  if(n%3==0) replace(document.getElementById('three'))
})

replace(document.getElementById('even'), Math.round(document.getElementById('even').innerText/num.length*100)+'%')
replace(document.getElementById('odd'), Math.round(document.getElementById('odd').innerText/num.length*100)+'%')
replace(document.getElementById('prime'), Math.round(document.getElementById('prime').innerText/num.length*100)+'%')
replace(document.getElementById('ten'), Math.round(document.getElementById('ten').innerText/num.length*100)+'%')
replace(document.getElementById('five'), Math.round(document.getElementById('five').innerText/num.length*100)+'%')
replace(document.getElementById('nine'), Math.round(document.getElementById('nine').innerText/num.length*100)+'%')
replace(document.getElementById('three'), Math.round(document.getElementById('three').innerText/num.length*100)+'%')

//replace(document.getElementById('avg'), document.getElementById('avg').innerText/num.length)

abc.forEach((a) => {
  let common = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].indexOf(a)
  common = ['a', '2', '5', '3', '11', '2', '3', '3', '8', '0', '1', '6', '3', '7', '7', '3', '0', '8', '6', '7', '4', '1', '1', '0', '2', '0'][common]
  replace(document.getElementById('common'), parseInt(document.getElementById('common').innerText)+common)
  
  if(['a', 'e', 'o', 'i', 'u'].includes(a)) replace(document.getElementById('vowel'))
  else replace(document.getElementById('consonant'))
  if(['s', 'q', 'r', 'u', 'o', 'p', 'd', 'g', 'j', 'c', 'b'].includes(a)) replace(document.getElementById('curved'))
  else replace(document.getElementById('straight'))
  if(['q', 'e', 'r', 't', 'y', 'u', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'c', 'b'].includes(a)) replace(document.getElementById('curved2'))
  else replace(document.getElementById('straight2'))
})
replace(document.getElementById('common'), Math.round((document.getElementById('common').innerText/abc.length))+'%')
replace(document.getElementById('vowel'), Math.round(document.getElementById('vowel').innerText/abc.length*100)+'%')
replace(document.getElementById('consonant'), Math.round(document.getElementById('consonant').innerText/abc.length*100)+'%')
replace(document.getElementById('curved'), Math.round(document.getElementById('curved').innerText/abc.length*100)+'%')
replace(document.getElementById('straight'), Math.round(document.getElementById('straight').innerText/abc.length*100)+'%')
replace(document.getElementById('curved2'), Math.round(document.getElementById('curved2').innerText/abc.length*100)+'%')
replace(document.getElementById('straight2'), Math.round(document.getElementById('straight2').innerText/abc.length*100)+'%')

document.getElementById('abc').style.display = 'none'

function setup() {
  let w, h
  w=1; h=0.5;
  let cnvs = createCanvas(windowWidth*w-15, windowHeight*h-15)
  cnvs.parent(document.getElementById('canvas'))
  rectMode(CORNERS)
  noStroke()

  background('#021a12')
  if(button.innerText == 'abc') graph(num, 0)
  else graph(abc, '')
}

function graph(data, type) {
  items = []
  if(type === 0) {
    for(let i=0; i<100; i++) {
      items.push({id:i+1, val:0})
    }
  } else {
    for(let i=0; i<26; i++) {
      let n = i+97
      items.push({id: n, val:0})
    }
  }
  textAlign(CENTER, BOTTOM)
  let high = 0
  let low = 100
  items.forEach((a) => {
    data.forEach((b) => {
      if(type === 0) {
        if(b === a.id) a.val++
      } else {
        if(b === char(a.id)) a.val++
      }
      if(a.val >= high) high = a.val
      if(a.val <= low) low = a.val
    })
  })
  let i = 0
  let size = width/(items.length*1.5)
  textSize(size)
  items.forEach((a) => {
    fill('#9adbc6')
    if(type === '') a.id = char(a.id)
    text(a.id, width/(items.length+1)*(i+1), height-size/3)
    let x=width/(items.length+1)*(i+1)
    let w=width/(items.length+1)
    w*=0.9
    let h=((height-size*3)/high+2)*(high-a.val-1)
    if(a.val === high) h=-size
    if(a.val != 0) rect(x-w/2, height-size*1.5, x+w/2, h+size*1.5)
    i++
  })
  textSize(size*0.7)
  textAlign(LEFT, CENTER)
  text(high, width/700, size*0.75)
  text(round(high/2), width/700, height/2)
  text(low, width/700, height-size*0.75)
  let title
  if(type === 0) title = 'Random Numbers Acording to Real Humans'
  else title = 'Random Letters Acording to Real Humans'
  textSize(width/80)
  textAlign(RIGHT, TOP)
  text(title, width-width/700, height/400)
}
