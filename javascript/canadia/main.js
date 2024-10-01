let game
let loot = [
  //0
  [],
  //1
  [
    {name: 'Gold Sword', amount: 1, damage: [20, 30], food: false},
    {name: 'Cookies', amount: 5, damage: [1, 4], food: true},
    {name: 'Fish of Resurection', amount: 1, damage: [5, 10], food: false},
  ]
]
let world = [
  //0
  {
    name: 'Redwood Forest',
    desc: "You're in a forest of tall, old redwood trees. There is a path in front of you.",
    look: "You see a small bird. It just so happened to be an introvert so it flew away.",
    npc: {name: '', dial: []},
    mnstrs: [],
    loot: 0,
    map: 0,
    exits: [1, 0, 0, 0],
  },
  //1
  {
    name: 'Thornfeild',
    desc: "You enter the lively village of Thornfeild. Thornfeild is a fisherman's town on the cool coast of Canadia the Great. To the west is a weekly farmer's market.",
    look: "To the east you accidentaly see an old man doing his buisness. He doesn't look to happy about this...",
    npc: {name: '', dial: []},
    mnstrs: [],
    loot: 0,
    map: 1,
    exits: [3, 0, 1, 2],
  },
  //2
  {
    name: 'Market - Thornfeild',
    desc: "You enter the weekly Shopping District, only open every Thursday from 1-1:05pm.",
    look: "As you may have guessed, the few people who were able to attend this event seem to be very proud of themselves. In fact, one civilian just jumped off a roof because they thought they were the luckiest person in Canadia the great.",
    npc: {name: 'Thornfeildillian', dial: ["Oh, hello there!", "Isn't this just great! I waited 604800 seconds for this moment!", "What brings you here today my fellow Thornfeildillian?", "Hey, here's a little tip... If you need food go west to the fishing dock... Old Tom might be able to help you..."]},
    mnstrs: [],
    loot: 0,
    map: 2,
    exits: [2, 2, 1, 4],
  },
  //3
  {
    name: 'Canadiaian Coast',
    desc: "You walk onto the cool, sandy Canadiaian Coast. The sun is setting...",
    look: 'I see dolphins... They say... "So long, and thanks for all the fish!"',
    npc: {name: 'Fisherman', dial: ['You wanna go to Feud Island? Type "boat" to get in!']},
    mnstrs: [],
    loot: 0,
    map: 3,
    exits: [3, 1, 3, 3],
  },
  //4
  {
    name: 'Village - Thornfeild',
    desc: "You enter the quiet neighborhood of Thornfeild. To the west is a fishing dock.",
    look: "You see an old lady watering her cabbage plants.",
    npc: {name: 'Thornfeildillian', dial: ['Good afternoon.', 'Hmm... need to feed the cat... fish...', 'Do you ever get seasick of fishing? Well, I do...', '99 bottles of beer on the wall... 99 bottles of beer... take one down pass it around... 98 bottles of beer on the wall...']},
    mnstrs: [],
    loot: 0,
    map: 4,
    exits: [4, 4, 2, 5],
  },
  //5
  {
    name: 'Fishing Dock - Thornfeild',
    desc: "You approach the edge of the village. There is a small but mighty fishing dock. There is also a crazy old man.",
    look: "You look into the waters of the ocean. You see some fish... thats about it.",
    npc: {name: 'Crazy Old Man', dial: ['You look like you want to go fishing.', 'Never to late to start fishing!', 'I hear these fish want to be eaten...', 'Once opon a time there was a fish. Then it died and got put into a soup.']},
    mnstrs: [],
    loot: 0,
    map: 5,
    exits: [5, 5, 4, 5],
  },
  //6
  {
    name: 'Feud Island',
    desc: "You're on the beach of Feud Island. Feud Island is a treacherous land much unlike Canadia. There are strange monsters behind every tree... But there are rumors... of a great land beyond the shore...",
    look: 'Aw, look a little birde... HA HA! NO ITS DEAD! heheeh',
    npc: {name: 'Fisherman', dial: ['You might want this sword...']},
    mnstrs: [],
    loot: 0,
    map: 6,
    exits: [7, 6, 6, 6],
  },
  //7
  {
    name: 'Feud Island',
    desc: "You're in a forest of old creaky oak trees. The trees are so dense that barely any sunlight reaches the forest floor. You hear a terrible screeching sound.",
    look: 'There are a lot of bones. And poop.',
    npc: {name: '', dial: ''},
    mnstrs: [
      {name: 'Entelodontidae', health: 45, damage: [3, 7], drops: [{name: 'Fish Coin', amount: 6, damage: [1, 5], food: false}, {name: 'Pork', amount: 1, damage: [1, 5], food: true}]}],
    loot: 0,
    map: 7,
    exits: [8, 6, 7, 7],
  },
  //8
  {
    name: 'Feud Island',
    desc: "You enter a small clearing in the forest. There is a big tree that looks like one of those cat towers... Oh, I get it now.",
    look: 'This is where all the fish went...',
    npc: {name: '', dial: ''},
    mnstrs: [
      {name: 'Big Kitty', health: 35, damage: [7, 10], drops: [{name: 'Fish Coin', amount: 6, damage: [1, 5], food: false}, {name: 'Salmon', amount: 3, damage: [1, 5], food: true}]}],
    loot: 0,
    map: 9,
    exits: [9, 7, 8, 10],
  },
  //9
  {
    name: 'Feud Island',
    desc: "You reach the edge of the forest. In front of you is a large feild of grass. It suddenly begins to rain.",
    look: 'So this is the Big Big Big Kitty...',
    npc: {name: '', dial: ''},
    mnstrs: [
      {name: 'Cougar', health: 65, damage: [8, 13], drops: [{name: 'Fish Coin', amount: 6, damage: [1, 5], food: false}, {name: 'Carp', amount: 5, damage: [1, 5], food: true}]}],
    loot: 0,
    map: 11,
    exits: [11, 8, 9, 9],
  },
  //10
  {
    name: 'Feud Island',
    desc: "You enter a cool corner in the forest next to the ocean. It's actualy pretty nice here. There's actualy no monsters here.",
    look: 'I wanna live here...',
    npc: {name: '', dial: ''},
    mnstrs: [],
    loot: 1,
    map: 10,
    exits: [10, 10, 8, 10],
  }
]
let colors = [
  //path 0
  '#ab9578',
  //grass 1-2
  '#4d9158',
  '#468c52',
  //sand 3
  '#c4ad8d',
  //building 4
  '#756d61',
  //ocean 5-6
  '#80c2e8',
  '#6bc0cf',
  //market 7-9
  '#6dcfba',
  '#db9569',
  '#cf6393',
  //Feud Island 10-11
  '#506e3b',
  '#3e542a'
]
let maps = [
  //0
  [
    [1, 2, 0, 0, 1, 2],
    [2, 1, 0, 0, 2, 1],
    [1, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 1, 2],
    [2, 1, 2, 1, 2, 1]
  ],
  //1
  [
    [4, 4, 0, 0, 2, 1],
    [4, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 2],
    [4, 0, 0, 0, 0, 1],
    [4, 4, 0, 0, 1, 2]
  ],
  //2
  [
    [4, 4, 4, 4, 4, 4],
    [7, 7, 0, 9, 9, 4],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [9, 0, 8, 8, 0, 4],
    [4, 4, 4, 4, 4, 4]
  ],
  //3
  [
    [5, 6, 5, 6, 5, 6],
    [0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3],
    [0, 0, 3, 3, 0, 0],
    [4, 4, 3, 3, 1, 2]
  ],
  //4
  [
    [4, 4, 4, 4, 4, 4],
    [1, 2, 1, 2, 1, 2],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [2, 1, 2, 1, 2, 1],
    [4, 4, 4, 4, 4, 4]
  ],
  //5
  [
    [5, 6, 0, 0, 5, 6],
    [6, 5, 0, 0, 6, 5],
    [4, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0],
    [4, 4, 4, 4, 4, 4]
  ],
  //6
  [
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [0, 0, 0, 0, 0, 0],
    [5, 6, 5, 6, 5, 6]
  ],
  //7
  [
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10]
  ],
  //8
  [
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11]
  ],
  //9
  [
    [11, 10, 0, 0, 11, 10],
    [10, 0, 0, 0, 0, 11],
    [0, 0, 0, 0, 0, 10],
    [0, 0, 0, 0, 0, 11],
    [11, 0, 0, 0, 0, 10],
    [10, 11, 0, 0, 10, 11]
  ],
  //10
  [
    [5, 6, 0, 10, 11, 10],
    [6, 5, 0, 0, 10, 11],
    [5, 6, 0, 0, 0, 0],
    [6, 5, 0, 0, 0, 0],
    [5, 6, 0, 0, 11, 10],
    [6, 5, 0, 11, 10, 11]
  ],
  //11
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11],
    [11, 10, 0, 0, 11, 10],
    [10, 11, 0, 0, 10, 11]
  ]
]

function setup() {
  txtLen = 0
  setupMap()
  game = new Game()
  input()
}
function getMap(id) {
  let map = []
  for(x=0; x<6; x++) {
    let more = []
    for(y=0; y<6; y++) {
      more.push(colors[maps[id][x][y]])
    }
    map.push(more)
  }
  return(map)
}
function draw() {
  drawMap(getMap(game.map), '#4d4b48')
}
function genLoot(table) {
  table = loot[table]
  let lootGen = []
  if(table != []) {
    while(lootGen.length < ceil(table.length/3)) {
      table.forEach(function(t) {
        let chance = round(0.6*table.length)
        chance = round(random(0, chance))
        chance = chance == 0
        let amount = round(random(t.amount-2, t.amount+2))
        if(amount<1) amount = 1
        if(t.food) t.amount = amount
        if(chance) lootGen.push(t)
      })
    }
  } else lootGen = []
  return lootGen
}
function itemSay(txt, amount) {
  if(amount > 1) {
    return(str(amount)+' '+txt+'s')
  } else {
    return(aAn(txt))
  }
}
function aAn(txt) {
  let aeuio = ['a', 'e', 'u', 'i', 'o']
  let txt0 = txt[0].toLowerCase()
  if(aeuio.includes(txt0)) {
    return('an '+txt)
  } else {
    return('a '+txt)
  }
}

class Game {
  constructor() {
    this.id = 0
    this.name = world[this.id].name
    this.desc = world[this.id].desc
    this.look = world[this.id].look
    this.npc = world[this.id].npc
    this.mnstrs = world[this.id].mnstrs
    this.loot = genLoot(world[this.id].loot)
    this.exits = world[this.id].exits
    this.map = world[this.id].map
    
    this.invent = []
    this.hand = {name: 'Cookie', amount: 5, damage: [1, 4], food: true}
    this.health = 100
    this.canType = true

    output("The Cool Coast of Canadia")
    output('Text Adventure by GreyBeard42')
    output('Type "help" for commands.')
    this.whatHere()
  }
  command(txt) {
    try {
      txt = txt.toLowerCase()
      if(this.health > 100) this.health = 100
      if(this.health < 50) {
        output('Your health is low! Eat food from your inventory!')
      }
      if(txt == '') {
        output('What?')
      //help
      } else if(txt == 'help') {
        this.help()
      //inventory
      } else if(txt == 'i' || txt == 'invent' || txt == 'inventory') {
        this.inventory()
      //talk
      } else if(txt == 't' || txt == 'talk') {
        this.dialoge(true)
      //look
      } else if(txt == 'l' || txt == 'look') {
        this.lookAround()
      //loot
      } else if(txt == 'loot') {
        if(this.loot.length > 0) {
          this.loot.forEach(function(l) {
            game.addInvent(l.name, l.amount, l.damage, l.food)
          })
          world[this.id].loot = 0
          this.inventory()
          output()
          output('~Looted Chest~')
        } else {
          output('There is no chest to loot!')
        }
      //north
      } else if(txt == 'n' || txt == 'north') {
        this.n()
      //south
      } else if(txt == 's' || txt == 'south') {
        this.s()
      //east
      } else if(txt == 'e' || txt == 'east') {
        this.e()
      //west
      } else if(txt == 'w' || txt == 'west') {
        this.w()
      //health
      } else if(txt == 'h' || txt == 'health') {
        output('You have '+this.health+'/100 health!')
      //carry
      } else if(txt[0] == 'c' || txt.includes('carry')) {
        output()
        let item = ''
        let itemId = 0
        let addingItem = false
        let whole = ''
        for(let i=0; i<txt.length; i++) {
          whole+=txt[i]
          if(addingItem) {
            if(itemId != 0 && item != ' ') {
              item+=txt[i]
            }
            itemId++
          } else {
            if(i+1 >= txt.length) {
              output('No no no...')
              item = 'undefined'
            } else {
              if((whole == 'c' && txt[i+1] != 'a') || whole == 'carry') addingItem = true
            }
          }
        }
        let checkingI = true
        for(let i=0; i<this.invent.length; i++) {
          if(checkingI) {
            let name = this.invent[i].name.toLowerCase()
            if(name == item) {
              let hand = this.hand
              let invent = this.invent[i]
              this.hand = invent
              this.invent[i] = hand
              checkingI = false
            }
          }
        }
        if(item == '') item = 'undefined'
        if(checkingI) {
          if(this.hand.name.toLowerCase() == item) {
            output("You're allready holding "+itemSay(this.hand.name, this.hand.amount))
          } else {
            output("You don't have \""+aAn(item)+'\".')
            if(this.invent.length > 0) {
              output('Try \"c '+random(this.invent).name.toLowerCase()+'\"')
            } else {
              output('Try \"carry '+this.hand.name+'\"')
            }
          }
        } else {
          this.inventory()
        }
      //eat
      } else if(txt == 'eat') {
        output()
        if(this.hand.food) {
          let ogHealth = this.health
          this.health += round(random(7, 15))
          if(this.health > 100) this.health = 100
          this.hand.amount--
          output('You gained '+(this.health-ogHealth)+' health!')
          if(this.health == 100) output("You have full health!")
          else output('You have '+this.health+'/100 health!')
          if(this.hand.amount < 1) {
            if(this.invent.length > 0) {
              let itemId = this.invent.length-1
              this.hand = this.invent[itemId]
              output('Moved '+itemSay(this.invent[itemId].name, this.invent[itemId].amount)+' to hand')
              this.invent.splice(itemId)
            } else {
              this.hand = {name: 'undefined', amount: 1, damage: [0, 1], food: false}
              output('There is nothing in your hand')
              output('Your inventory is 100% EMPTY')
            }
          }
        } else {
          let text = aAn(this.hand.name)+' is not a food'
          let newText = text[0].toUpperCase()
          for(let i=1; i<text.length; i++) {
            newText+=text[i]
          }
          output(newText)
        }
      //fish
      } else if(txt == 'fish' || txt == 'f') {
        if(this.id == 5 || this.id == 3 || this.id == 6) {
          let fishTable = [{name: 'Trout', amount: 1, damage: [1, 4], food: true}, {name: 'Salmon', amount: 1, damage: [1, 4], food: true}, {name: 'Carp', amount: 1, damage: [1, 4], food: true}, {name: 'Bass', amount: 1, damage: [1, 4], food: true}]
          let pick = random(fishTable)
          this.addInvent(pick.name, pick.amount, pick.damage, pick.food)
          output('You fished up a '+pick.name+'!')
        } else {
          output()
          output('There is nowhere to fish!')
        }
      //boat
      } else if(txt == 'boat') {
        if(this.id == 3) {
          let food = 0
          for(let i=0; i<this.invent.length; i++) {
            if(this.invent[i].food) food += this.invent[i].amount
          }
          if(this.hand.food) food+=this.hand.amount
          if(food>10) {
            output('You get into the boat')
            this.go(6)
          } else output('You need more food to survive Feud Island!')
        } else if(this.id == 6) {
          output('You get into the boat')
          this.go(3)
        } else {
          output()
          output('What boat? There is none!')
        }
      //attack
      } else if(txt == 'a' || txt == 'attack') {
        if(this.mnstrs.length > 0) {
          for(let i=0; i<this.mnstrs.length; i++) {
            let damage = round(random(this.hand.damage[0], this.hand.damage[1]))
            this.mnstrs[i].health -= damage
            output('You dealed '+damage+' damage to '+this.mnstrs[i].name)
          }
        } else {
          output('Attack what?')
        }
      } else {
        output('What?')
      }
      this.fightMonsters()
      this.dead()
    }
    catch(err) {
      output()
      output('!-!-!')
      output()
      output('Error!')
      output('Please send me the following error message and last command:')
      output()
      output(err.stack)
      output('---')
      output('THIS:')
      output(JSON.stringify(this))
    }
  }
  showExits() {
    let exits = 'Exits:'
    let nsew = ["N", "S", "E", "W"]
    for(let i=0; i<4; i++) {
      if(this.exits[i] != this.id) {
        if(exits == 'Exits:') exits += ' '
        else exits+= ', '
        exits += nsew[i]
      }
    }
    if(exits == 'Exits:') exits += ' none!'
    output()
    output(exits)
  }
  whatHere() {
    output()
    output('~'+this.name+'~')
    output(this.desc)
    output('You are holding '+itemSay(this.hand.name, this.hand.amount))
    this.showExits()
    if(this.npc.dial.length > 0) output()
    this.dialoge(false)
    if(this.mnstrs.length > 0) {
      output()
      output("You've entered a battle! Type \"attack\", \"health\", or any other command!")
    }
    if(this.id == 5) {
      output()
      output('~Fishing~')
      output('Type "fish" to try and catch a fish or use any other command.')
    }
  }
  help() {
    output('-Commands-')
    output('Main:')
    output('H / health')
    output('I / invent / inventory')
    output('Move:')
    output('N / north')
    output('S / south')
    output('E / east')
    output('W / west')
    output('Actions:')
    output('L / look')
    output('T / talk')
    output('C / carry')
    output('F / fish')
    output('A / attack')
    output('loot')
    output('eat')
  }
  lookAround() {
    output(this.look)
  }
  inventory() {
    output('-Inventory-')
    for(let i=0; i<this.invent.length; i++) {
      output(itemSay(this.invent[i].name, this.invent[i].amount))
    }
    if(this.invent.length < 1) output('empty')
    output()
    output('You have '+itemSay(this.hand.name, this.hand.amount)+' in your hand')
  }
  dialoge(com) {
    if(this.npc.dial.length > 0) {
      this.npcId = floor(random(0, this.npc.dial.length))
      output('~'+this.npc.name+'~')
      output(this.npc.dial[this.npcId])
    } else if(com) {
      output('There is no one to talk to.')
    }
    if(this.id == 6 && this.npc.dial == 'You might want this sword...') {
      this.addInvent('Bronze Sword', 1, [15, 20], false)
      world[this.id].npc.dial = ['You wanna ditch the monsters and go back to Canadia? Go ahead and type "boat" again.',]
      output()
      output('You got a Bronze Sword!')
      output('Type "c bronze sword" to move it to your hand!')
    }
  }
  addInvent(name, amount, damage, food) {
    let item = {}
    item.name = name
    item.amount = amount
    item.damage = damage
    item.food = food
    let itemId = -1
    for(let i=0; i<this.invent.length; i++) {
      if(this.invent[i].name == name) {
        itemId = i
        i = this.invent.length
      }
    }
    //if hand == undfined add to hand NOT invent
    if(itemId < 0) {
      if(this.hand.name == name) {
        this.hand.amount += amount
      } else if(this.hand.name == 'undefined') { this.hand = item
      } else this.invent.push(item)
    } else this.invent[itemId].amount += amount
  }
  fightMonsters() {
    if(this.mnstrs.length > 0) {
      output()
      for(let i=0; i<this.mnstrs.length; i++) {
        let monster = this.mnstrs[i]
        if(monster.health <= 0) {
          output('Killed '+monster.name+'!')
          //drops
          let dropLen = monster.drops.length
          for(let d=0; d<dropLen; d++) {
            let drop = monster.drops[d]
            if(round(random(0, dropLen/1.4)) == 0) {
              let amount = round(random(drop.amount-3, drop.amount+3))
              if(amount<1) amount=1
              this.addInvent(drop.name, amount, drop.damage, drop.food)
              output('+'+itemSay(drop.name, amount))
              if(drop.name == 'Fish Coin') {
                this.coins += amount
              }
            }
          }
          //remove monster
          this.mnstrs.splice(i)
          if(this.mnstrs.length == 0) this.showExits()
        } else if(monster.health > 0) {
          //monster fight you
          let damage = round(random(monster.damage[0], monster.damage[1]))
          this.health -= damage
          output(monster.name+' dealt '+damage+' damage!')
        }
      }
    }
  }
  loot() {
    if(this.loot != []) {
      output('~CHEST~')
      this.loot.forEach(function(l) {
        output('-'+itemSay(l.name, l.amount))
      })
      output('Type \"loot\" to move all items to inventory')
      output()
    }
  }
  dead() {
    if(this.health<1) {
      this.canType = false
      output()
      output('!=!=!')
      output('You Died!')
      output('Refresh Page')
      output('!=!=!')
      output()
    }
  }
  go(id) {
    if(this.mnstrs.length == 0) {
      this.id = id
      this.name = world[id].name
      this.desc = world[id].desc
      this.look = world[id].look
      this.npc = world[id].npc
      this.mnstrs = world[id].mnstrs
      this.loot = genLoot(world[id].loot)
      this.exits = world[id].exits
      this.map = world[this.id].map

      output()
      output('====')
      this.whatHere()
    } else {
      output('No no no :D')
      output("You're in a battle right now!")
    }
  }
  n() {
    if(this.id == this.exits[0]) output('You can not go that way')
    else this.go(this.exits[0])
  }
  s() {
    if(this.id == this.exits[1]) output('You can not go that way')
    else this.go(this.exits[1])
  }
  e() {
    if(this.id == this.exits[2]) output('You can not go that way')
    else this.go(this.exits[2])
  }
  w() {
    if(this.id == this.exits[3]) output('You can not go that way')
    else this.go(this.exits[3])
  }
}

function input() {
  let box = document.getElementById('input')
  let button = document.getElementById('submit')
  button.addEventListener('click', function() {
    if(game.canType) {
      output()
      output('>'+box.value)
      if(box.value[box.value.length-1] == ')') eval(box.value)
      else game.command(box.value)
      box.value = ''
    }
  })
  box.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && game.canType) {
      output()
      output('>'+box.value)
      if(box.value[box.value.length-1] == ')') eval(box.value)
      else game.command(box.value)
      box.value = ''
    }
  })
}
function output(txt) {
  let box = document.getElementById('outputDiv')
  if(txt === undefined) {
    let br = document.createElement('br')
    box.appendChild(br)
  } else {
    let text = document.createElement('p')
    text.innerText = txt
    text.style = 'margin: 0'
    box.appendChild(text)
  }
  box.scrollTo({top: box.scrollHeight, behavior: 'smooth'});
}