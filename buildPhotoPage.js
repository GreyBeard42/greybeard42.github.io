var content = document.getElementById('content')
let images = [
  {src: '31aug24/CSC_0181.JPG', alt: 'Pier 1 Clock Tower'},
  {src: '31aug24/CSC_0185.JPG', alt: 'Some leaves in a park next to Peir 1'},
  {src: '31aug24/DSC_0100.JPG', alt: 'Pier 1 Clock Tower (bayview)'},
  {src: '31aug24/DSC_0213.JPG', alt: 'Pier 1 Clock Tower'},
  {src: '31aug24/DSC_0239.JPG', alt: 'Downtown SF (bayview)'},
  {src: '31aug24/DSC_0229.JPG', alt: 'Pier 1 Ferry Building (bayview)'},
  {src: '31aug24/DSC_0097.JPG', alt: "Edge of Fisherman's Warf from Dock"},
  {src: '31aug24/DSC_0101.JPG', alt: 'Inside Ferry Building'},
  {src: '31aug24/DSC_0093.JPG', alt: 'Aproaching Peir 1 on Ferry'},
  {src: '31aug24/DSC_0065.JPG', alt: 'Angel Island'},
  {src: '31aug24/DSC_0242.JPG', alt: 'Bay Bridge from Ferry'},
  {src: '31aug24/DSC_0070.JPG', alt: 'Bay Bridge from water'},
  {src: '31aug24/DSC_0219.JPG', alt: "Bay Bridge from Fisherman's Warf"},
  {src: '31aug24/DSC_0276.JPG', alt: 'Bay Bridge and Downtown SF'},
  {src: '31aug24/DSC_0266.JPG', alt: 'Bay Bridge and Downtown SF'},
  
  {src: '31aug24/DSC_0029.JPG', alt: 'Cargo ship with dozens of pink containers'},
  {src: '31aug24/DSC_0303.JPG', alt: 'Blue cargo ship covered in colorfull containers.'},
  {src: '31aug24/DSC_0025.JPG', alt: 'Three tall dockworkers'},
  {src: '31aug24/DSC_0020.JPG', alt: 'A closeup on a dockworker'},
  {src: '31aug24/DSC_0039.JPG', alt: 'An old cargo ship covered in yellow containers'},
  {src: '31aug24/DSC_0038.JPG', alt: 'A cargo ship unloading its yellow containers'},
  {src: '31aug24/DSC_0034.JPG', alt: 'A small sailboat next to a cargo ship.'},
  
  {src: 'aug24/DSC_0840-min.JPG', alt: 'The ocean feeding into the river?'},
  {src: 'aug24/DSC_0846-min.JPG', alt: 'setting sun + ocean'},
  {src: 'aug24/DSC_0830-min.JPG', alt: 'Old broken dock by the ocean.'},
  {src: 'aug24/DSC_0836-min.JPG', alt: 'setting sun + ocean'},
  {src: 'aug24/DSC_0878-min.JPG', alt: 'setting sun + ocean'},
  {src: 'aug24/DSC_0872-min.JPG', alt: 'setting sun + ocean'},
  {src: 'aug24/CSC_0818-min.JPG', alt: 'A river feeding into the ocean.'},
  {src: 'aug24/DSC_1228-min.JPG', alt: 'Those people are about to go down the biggest part of this rollercoaster... nvm its empty'},
  {src: 'aug24/DSC_0970-min.JPG', alt: 'Some more people going down a corner of the old rollercoaster.'},
  {src: 'aug24/CSC_1194-min.JPG', alt: "The very top of the ol' rollercoaster."},
  {src: 'aug24/DSC_0238-min.JPG', alt: "Some people going around a corner on the big ol' rollercoaster."},
  {src: 'aug24/DSC_1178-min.JPG', alt: 'The GIANT DIPPER throwing some more innocient citizens down a hill.'},
  {src: 'aug24/DSC_1237-min.JPG', alt: 'That old rollercoaster taking those people around another painfull corner.'},
  {src: 'aug24/DSC_1168-min.JPG', alt: 'The really old rollercoaster throwing some people around a corner.'},
  {src: 'aug24/DSC_1197-min.JPG', alt: 'A nice view of the east side of the highly specific boardwalk.'},
  {src: 'aug24/CSC_1146-min.JPG', alt: 'The entrance to the GIANT DIPPER a rollercoaster that I rode so I could talk about it in this alt text for an image.'},
  {src: 'aug24/CSC_1136-min.JPG', alt: "An 80's themed scam game building."},
  {src: 'aug24/CSC_1105-min.JPG', alt: 'A sky view of the scam games and food.'},
  {src: 'aug24/CSC_0982-min.JPG', alt: 'A view of the sky ride that I sat on for your sake.'},
  {src: 'aug24/DSC_1121-min.JPG', alt: 'A normal view of the spinning coaster and dome building.'},
  {src: 'aug24/DSC_0250-min.JPG', alt: 'A sunset view of the spinning coaster and dome building.'},
  {src: 'aug24/CSC_0990-min.JPG', alt: 'A spooky gargole.'},
  {src: 'aug24/DSC_0255-min.JPG', alt: 'The full parking lot of the beach.'},
  {src: 'aug24/CSC_1041-min.JPG', alt: 'A black-and-white photo showcasing the shadows on a building.'},
  {src: 'aug24/CSC_1013-min.JPG', alt: 'A colorfull building on the beach.'},
  {src: 'aug24/CSC_0994-min.JPG', alt: 'A spinning rollercoaster going down a big drop.'},
  {src: 'aug24/CSC_0978-min.JPG', alt: "Another entrance to our favoirte unnamed amusment park. (it has a name but I won't tell ;p)"},
  {src: 'aug24/CSC_1046-min.JPG', alt: 'The entrance to this specific amusment park that will remain unnamed on this webpage.'},
  {src: 'aug24/CSC_0962-min.JPG', alt: "The view of a very specific amusment park from it's parking lot."},
  {src: 'aug24/CSC_0129-min.JPG', alt: "A train bridge going over a river to the sea."},
  {src: 'aug24/DSC_0131-min.JPG', alt: 'A green viny wall holding up beach houses. sry bad desc :/'},
  {src: 'aug24/DSC_0218-min.JPG', alt: 'A view of the beach from a whole new angle!'},
  {src: 'aug24/CSC_1096-min.JPG', alt: 'The view of a beach from a ski lift without skiing.'},
  {src: 'aug24/DSC_1141-min.JPG', alt: 'BEACH.'},
  {src: 'aug24/DSC_1125-min.JPG', alt: 'Waves hitting a beach.'},
  {src: 'aug24/DSC_1117-min.JPG', alt: 'A sandy beach complete with a bird.'},
  {src: 'aug24/CSC_0182-min.JPG', alt: 'A palm tree.'},
  {src: 'aug24/DSC_0802-min.JPG', alt: 'A rusted highway divider surounded by weeds.'},
  {src: 'aug24/DSC_0692-min.JPG', alt: 'A single yellow jellyfish having zero thoughts.'},
  {src: 'aug24/DSC_0689-min.JPG', alt: 'An upside-down yellow jellyfish doing jellyfish thing.'},
  {src: 'aug24/DSC_0674-min.JPG', alt: 'An upside-down pink jellyfish doing jellyfish things.'},
  {src: 'aug24/CSC_0676-min.JPG', alt: 'A pink jellyfish doing jellyfish things.'},
  {src: 'aug24/CSC_0636-min.JPG', alt: 'Another angle on that moody yellow fish.'},
  {src: 'aug24/CSC_0631-min.JPG', alt: 'An exclusive interview with a moody yellow fish.'},
  {src: 'aug24/DSC_0702-min.JPG', alt: 'Some chill penguins.'},
  {src: 'aug24/CSC_0531-min.JPG', alt: 'A proud fish. idk sry.'},
  {src: 'aug24/CSC_0567-min.JPG', alt: 'A tree in an indoor aviary.'},
  {src: 'aug24/CSC_0581-min.JPG', alt: 'A bird cleaning itself in an indoor aviary.'},
  {src: 'aug24/CSC_0561-min.JPG', alt: 'A small bird in the creek of an indoor aviary.'},
  {src: 'aug24/DSC_0562-min.JPG', alt: 'The sandy floor of an indoor aviary.'},
  {src: 'aug24/DSC_0522-min.JPG', alt: 'A sooper dooperr skary shark.'},
  {src: 'aug24/DSC_0518-min.JPG', alt: 'A large fish tank with tall towers of kelp.'},
  {src: 'aug24/DSC_0542-min.JPG', alt: 'A school of blue-silver fish.'},
  {src: 'aug24/DSC_0527-min.JPG', alt: 'A fish frowning at the camera.'},
  {src: 'aug24/DSC_0763-min.JPG', alt: 'An upside-down sea otter.'},
  {src: 'aug24/DSC_0551-min.JPG', alt: "An indoor aviary with a tree :')"},
  {src: 'aug24/DSC_0614-min.JPG', alt: 'A slightly less miniature waterfall.'},
  {src: 'aug24/DSC_0752-min.JPG', alt: 'A fish pouting at the camera.'},
  {src: 'aug24/DSC_0610-min.JPG', alt: 'A fish staring in awe at the camera.'},
  {src: 'aug24/DSC_0604-min.JPG', alt: 'A miniature waterfall feature.'},
  {src: 'aug24/DSC_0655-min.JPG', alt: "An eel with a shocked expression on it's slippery face."},
  {src: 'CSC_0644.JPG', alt: 'Leafless trees in front of a rocky hill.'},
  {src: 'CSC_0635.JPG', alt: 'An upclose image of a flowing river.'},
  {src: 'DSC_0695.JPG', alt: 'A rapidly flowing river next to mossy rocks.'}
]
let links = [
  {name: "Pier 1 - SF", link: "31aug24/CSC_0181.JPG"},
  {name: 'Cargo Ships', link: "31aug24/DSC_0029.JPG"},
  {name: "Rio del Mar", link: "aug24/DSC_0840-min.JPG"},
  {name: "Santa Cruz", link: "aug24/DSC_1228-min.JPG"},
  {name: "Little Yosemite", link: "CSC_0635.JPG"}
]

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
let info = document.createElement('p')
info.innerText = '*Will not auto scroll until image is loaded'
info.style = "margin: 0.25%;"
content.appendChild(info)

let column1 = document.createElement('div')
column1.classList.add('column')
let column2 = document.createElement('div')
column2.classList.add('column')
let columns = []
columns.push(column1)
columns.push(column2)

let i = 0
images.forEach((e) => {
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