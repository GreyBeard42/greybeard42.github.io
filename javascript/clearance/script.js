let screen = document.getElementById('game')
screen.style = 'text-align: center; background: #063627; padding: 1%;'
let grid = document.createElement('div')
grid.style = 'display: grid; grid-template-columns: 14em 14em 14em; justify-content: center;'
let sale = document.getElementById('marquee')


let title, desc, topTxt
function createTop() {
  title = document.createElement('h1')
  title.innerText = 'CLEARANCE'
  title.style = 'margin: 0;'
  screen.appendChild(title)
  desc = document.createElement('p')
  desc.innerText = 'Click the best deal!'
  desc.style = 'margin: 1%;'
  screen.appendChild(desc)
  topTxt = document.createElement('p')
  topTxt.innerText = 'TIME: 50 - SCORE: 0'
  topTxt.style = 'margin: 0 0 1%;'
  screen.appendChild(topTxt)
}

class Game {
  constructor() {
    createTop()
    
    this.score = 0
    this.level = 0
    this.time = 50
    this.playing = true
    this.images = [
      ['images/0-0.png', 'images/0-1.png', 'images/0-2.png', 'images/0-3.png', 'images/0-4.png', 'images/0-5.png'],
      ['images/1-0.png', 'images/1-1.png', 'images/1-2.png', 'images/1-3.png', 'images/1-4.png'],
      ['images/2-0.png', 'images/2-1.png', 'images/2-2.png', 'images/2-3.png', 'images/2-4.png'],
      ['images/3-0.png', 'images/3-1.png', 'images/3-2.png', 'images/3-3.png', 'images/3-4.png'],
      ['images/4-0.png', 'images/4-1.png', 'images/4-2.png', 'images/4-3.png']
    ]
    this.names = [
      ['Mayo Magic', 'Silky Blend', 'Premium Spice', 'Savory Spoon', 'FlavorFusion', 'Scorch Sauce'],
      ['Golden Crunch', 'Spice Triangles', 'Zing Chips', 'Flavorfull SCOOPS', 'Jalapeño Cheedoughz'],
      ['Chips OHBOY!', 'Yummyoes', 'Golden Bites', 'Accept Cookies?', 'Little Schoolboy'],
      ['Frosted Fudge', "Ken & Harry's", "Däagen Pawz", 'Drumkit', 'Its-Not-It'],
      ['Unlucky Farms', 'Wispy Lice', 'Cheerio!', 'Loot Froops']
    ]
    this.buildLevel()
  }
  tick() {
    if(this.playing) {
      this.time -= 1
      topTxt.innerText = 'TIME: '+this.time+' - SCORE: '+this.score

      //GAMEOVER
      if(this.time == 0) {
        this.playing = false
        grid.innerHTML = ''
        let over = document.createElement('h1')
        over.innerText = 'Game Over'
        over.style = 'margin: 1% 0;'
        sale.style = 'visibility: hidden;'
        screen.appendChild(over)
        let btn = document.createElement('button')
        btn.innerText = 'Play Again'
        btn.style = 'margin-bottom: 1%;'
        btn.addEventListener("click", () => {screen.innerHTML = ''; game = new Game()})
        screen.appendChild(btn)
      }
    }
  }
  buildLevel() {
    this.choices = []
    this.type = Math.round(Math.random()*(this.names.length-1))
    this.level++
    let a
    if(this.level%3 == 0) {
      a = 6
      sale.style = 'visibility: shown;'
    } else {
      a = 3
      sale.style = 'visibility: hidden;'
    }
    
    function id(len) {return(Math.round(Math.random()*(len-1)))}

    for(let i=0; i<a; i++) {
      let choice = {}
      let thingId = id(this.images[this.type].length)
      choice.image = this.images[this.type][thingId]
      choice.name = this.names[this.type][thingId]
      choice.amount = Math.round(Math.random()*6)+1
      choice.cost = Math.round(Math.random()*10)+1
      choice.cost += Math.round(Math.random()*4)*0.25
      while(choice.cost<=choice.amount) choice.cost += 0.25
      
      let box = document.createElement('div')
      box.style = 'padding: 1%; border: 4px solid #9adbc6; margin: 1%;'
      if(Math.round(Math.random()*4) == 1 && this.level != 1) box.style = 'padding: 1%; border: 4px solid #9adbc6; margin: 1%; animation-name: spin; animation-duration: 1000ms; animation-timing-function: linear; '
      box.id = i
      let img = document.createElement('img')
      img.src = choice.image
      img.style = 'width: 90%;'
      let name = document.createElement('h3')
      name.innerText = choice.name
      let cost = document.createElement('p')
      cost.innerText = '$'+choice.cost
      let amount = document.createElement('p')
      amount.innerText = choice.amount+' oz'

      choice.value = choice.cost/choice.amount
      this.choices.push(choice)

      box.addEventListener('click', (e) => {
        game.select(choice.value)
      })

      box.appendChild(img)
      box.appendChild(name)
      box.appendChild(cost)
      box.appendChild(amount)

      grid.appendChild(box)
    }
    screen.appendChild(grid)
  }
  select(i) {
    this.choices = this.choices.sort(function(a, b) {a.value > b.value})
    let score = Math.round((this.choices.length*0.65-this.choices.length)*50)
    this.choices.forEach((e) => {
      if(e.value > i) score+=50
    })
    this.score += Math.round(score/10)*10
    topTxt.innerText = 'TIME: '+this.time+' - SCORE: '+this.score
    
    grid.innerHTML = ''
    this.buildLevel()
  }
}

function fullscreen() {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
    document.body.setAttribute("fullscreen","");
  } else {
    document.exitFullscreen();
    document.body.removeAttribute("fullscreen"); 
  }
}

let game = new Game()
setInterval(function () {game.tick()}, 1000)
