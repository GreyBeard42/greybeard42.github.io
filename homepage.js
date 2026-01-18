let projects

fetch("repos.json")
  .then(file => file.json())
  .then(data => projects = data)
  .then(() => {
    new Row("New Projects").new()
    new Row("Random Projects").random()
    new Row("Games").games()
  })

class Row {
  constructor(t) {
    this.title = document.createElement("a")
    this.title.innerText = t
    document.getElementById("page").appendChild(this.title)
    this.div = document.createElement("div")
    document.getElementById("page").appendChild(this.div)
  }
  async games() {
    let random = []
    let max=getMaxProjectsPerRow()
    for(let i=0; i<max; i++) {
      let temp = projects[Math.floor(Math.random()*(projects.length-1))]
      if(random.includes(temp)) i -= 1
      else {
        try {
          random.push(temp)
          if(await ahah(temp, this.div, ["game"])) i-=1
        } catch {
          console.log(temp+" didn't load properly")
          i -= 1
        }
      }
      if(random.length >= projects.length-1) {
        i=max+10
      }
    }
  }
  async random() {
    let random = []
    let max=getMaxProjectsPerRow()
    for(let i=0; i<max; i++) {
      let temp = projects[Math.floor(Math.random()*(projects.length-1))]
      if(random.includes(temp)) i -= 1
      else {
        try {
          random.push(temp)
          await ahah(temp, this.div)
        } catch {
          console.log(temp+" didn't load properly")
          i -= 1
        }
      }
      if(random.length >= projects.length-1) {
        i=max+10
      }
    }
  }
  async new() {
    let tries = 0
    let max=getMaxProjectsPerRow()
    let p=0
    for(let i=0; i<max; i++) {
      let temp = projects[p]
      try {
        await ahah(temp, this.div)
      } catch {
        console.log(temp+" didn't load properly")
        i -= 1
      }
      tries++
      p++
      if(tries >= projects.length-1) {
        i=max+10
      }
    }
  }
}

async function ahah(p, parent=document.getElementById("page"),tags=undefined) {
  let test = new Project(p)
  await test.loadMetadata()
  let tagmatch = true
  if(tags) {
    tagmatch=false
    tags.forEach(tag => {
      if(test.metadata.tags.includes(tag)) tagmatch = true
    })
  }
  if(!tagmatch) return true
  parent.appendChild(test.outer)
}

function getMaxProjectsPerRow() {
  let padding = Math.min(200, 0.4 * window.innerWidth) + 30
  let available = window.innerWidth - padding
  return Math.max(Math.floor((available+5)/(210+5)), 3)
}