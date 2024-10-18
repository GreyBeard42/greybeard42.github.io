console.log("Hello fellow nerd!")

let halloween = (new Date().getMonth() == 9)
let christmas = (new Date().getMonth() == 11)
let pumpkin

let canvas = document.createElement('div')
canvas.id = "canvas"
canvas.classList.add("egg")
canvas.style.visibility = 'hidden'
document.body.appendChild(canvas)

let script = document.createElement('script')
script.src = "holiday/halloween.js"
document.body.appendChild(script)

if(halloween) {
    let images = ["holiday/pumpkin.png", "holiday/pumpkClose.png"]
    pumpkin = document.createElement("img")
    pumpkin.src = images[0]
    pumpkin.classList.add("open")
    if(location.href.split("/").slice(-1) == "photography.html") pumpkin.style.bottom = "6vh"
    pumpkin.addEventListener("click", () => {
        if(pumpkin.src.includes(images[1])) {
            pumpkin.src = images[0]
            canvas.style.visibility = 'hidden'
        } else {
            setup()
            draw = () => {if(halloween && canvas.style.visibility == 'visible') tick()}
            pumpkin.src = images[1]
            canvas.style.visibility = 'visible'
        }
    })
    document.body.appendChild(pumpkin)
}

function setup() {
    if(halloween) {
        let cnvs = createCanvas(windowWidth*0.96-15, windowHeight*0.96-15)
        cnvs.parent('canvas')
    
        colorMode(RGB, 100)
        rectMode(CENTER)
        ellipseMode(CENTER)
        user = new Beam()
        pumpkins = []
        dificulty = 500
        score = 0
        shake = new Shake()
    }
}

function draw() {
    if(halloween && canvas.style.visibility == 'visible') tick()
}