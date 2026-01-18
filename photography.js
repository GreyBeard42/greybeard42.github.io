var content = document.getElementById('content')
let photos, links
let bigimgscale = 90

function hidebig() {
  document.body.style = "overflow-y: scroll;"
  document.getElementById("big").style = "display: none;"
  document.getElementById("close").removeEventListener("click", hidebig)
}

function bigscale(num) {
  document.getElementById("bigimg").style.maxWidth = `${num}vw`
  document.getElementById("bigimg").style.maxHeight = `${num}vh`
}

window.addEventListener('wheel', function(event) {
  if(document.getElementById("big").style.cssText === "display: none;") return
  if (event.deltaY < 0) {
    bigimgscale *= 1.1
  } else if (event.deltaY > 0) {
    bigimgscale *= 0.9
  }
  bigimgscale = Math.max(50,bigimgscale)
  bigimgscale = Math.min(800,bigimgscale)
  bigscale(bigimgscale)
});

fetch("photos.json")
  .then(file => file.json())
  .then(data => {
    let columns = Math.ceil(document.body.clientWidth/400)
    let outer = document.createElement("div")
    outer.classList.add("images")

    data.photos.forEach((sect) => {
      let section = document.createElement("div")

      let title = document.createElement("h2")
      title.innerText = sect.title
      outer.appendChild(title)

      let columnElements = []
      for(let i = 0; i < columns; i++) {
        let col = document.createElement("div")
        col.classList.add("column")
        columnElements.push(col)
        section.appendChild(col)
      }

      sect.photos.forEach((e, i) => {
        if(e.alt !== '') {
          let image = document.createElement('img')
          image.src = 'images/photography/' + e.src
          image.alt = e.alt
          image.id = e.src
          image.loading = 'lazy'
          image.addEventListener("click", () => {
            bigimgscale = 90
            bigscale(90)
            document.body.style = "overflow-y: hidden;"
            document.getElementById("big").style = "display: block;"
            document.getElementById("bigimg").src = 'images/photography/'+e.src
            document.getElementById("close").addEventListener("click", hidebig)
          })

          columnElements[i % columns].appendChild(image)
        }
      })

      outer.appendChild(section)
      let hr = document.createElement("hr")
      outer.appendChild(hr)
    })

    content.appendChild(outer)
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