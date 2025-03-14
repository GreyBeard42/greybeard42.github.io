var content = document.getElementById('content')
let photos, links

fetch("photos.json")
  .then(file => file.json())
  .then(data => {
    photos = data.photos
    links = data.links
  })
  .then(() => {
    let linkTitle = document.createElement('p')
    linkTitle.innerText = 'Jump to:'
    linkTitle.style = 'margin: 0.25%;'
    content.appendChild(linkTitle)
    links.forEach((e) => {
      let txt = document.createElement('a')
      txt.innerText = e.name
      txt.href = "#"+e.link
      txt.style = 'color: inherit; margin: 0.25%; text-decoration: underline;'
      txt.addEventListener("click", () => {
        const target = txt.getAttribute('href').substring(1);
        smoothScroll(target)
      })
      content.appendChild(txt)
    })

    let column1 = document.createElement('div')
    column1.classList.add('column')
    let column2 = document.createElement('div')
    column2.classList.add('column')
    let columns = []
    columns.push(column1)
    columns.push(column2)

    let i = 0
    photos.forEach((e) => {
      if(e.alt != '') {
        let image = document.createElement('img')
        image.src = 'images/photography/'+e.src
        image.alt = e.alt
        image.id = e.src
        image.loading = 'lazy'
        if(i%2==0) {
          columns[0].appendChild(image)
        } else {
          columns[1].appendChild(image)
        }
      }
      i++
    })

    let row = document.createElement('div')
    row.classList.add('row')
    row.appendChild(columns[0])
    row.appendChild(columns[1])

    content.appendChild(row)
  })

function smoothScroll(t) {
  const e = document.getElementById(t);
  if (e) {
    window.scrollTo({
      top: e.offsetTop,
      behavior: 'smooth'
    });
  }
}

let topBtn = document.createElement("button")
topBtn.innerText = 'Scroll to top'
topBtn.style='position: fixed; bottom: 1%; right: 1%; display: none; font-size: 150%; font-family: "Beardy", sans-serif; color: inherit; background-color: inherit; border: 0.25vw solid;'
topBtn.addEventListener('click', () => {
  window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
  })
})
document.body.appendChild(topBtn)

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block"
  } else {
    topBtn.style.display = "none"
  }
}

//secret specs

let camera = document.createElement("img")
camera.src = 'images/camera.png'
camera.style = "width: 10vw; float: center;"
camera.addEventListener("click", () => {
  //switch
  if(specs.style.visibility == 'hidden') specs.style.visibility = 'visible'
  else specs.style.visibility = 'hidden'
})
document.body.appendChild(camera)

let specs = document.createElement('div')
specs.style = 'width: 80vw; height: 80vh; text-align: center; position: fixed; top: 10vh; background: #043022; left: 10vw; border: solid 0.5vw #9adbc6; visibility: hidden; overflow-y: scroll;'

let title = document.createElement('h1')
title.innerText = "Camera Specs"
specs.appendChild(title)

let note = document.createElement('p')
note.innerText = 'Press Camera icon again to close'
specs.appendChild(note)

let name = document.createElement('h2')
name.innerText = "Nikon d5000"
specs.appendChild(name)

let lines = ["Released April 2009", "Tilt and swivel monitor", "12.3 Megapixels", "1/4000 - 30 second shutter speed", "Live View", "Microphone, Video Mode", "In-Camera editing"]
lines.forEach((l) => {
  let temp = document.createElement('p')
  temp.innerText = '- '+l
  specs.appendChild(temp)
})

name = document.createElement('h2')
name.innerText = "Wide Lens"
specs.appendChild(name)

lines = ["18-55mm", "1:3.5-5.6G", "AF-S"]
lines.forEach((l) => {
  let temp = document.createElement('p')
  temp.innerText = '- '+l
  specs.appendChild(temp)
})

name = document.createElement('h2')
name.innerText = "Sigma Lens"
specs.appendChild(name)

lines = ["70-300mm", "1:4-5.6", "AF-S"]
lines.forEach((l) => {
  let temp = document.createElement('p')
  temp.innerText = '- '+l
  specs.appendChild(temp)
})

document.body.appendChild(specs)