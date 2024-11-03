console.log("Hello fellow nerd!")

let license = document.createElement('p')
license.innerHTML = '<a href="https://github.com/GreyBeard42/greybeard42.github.io/blob/main/LICENSE">View License</a> <br> Copyright (c) 2024 <a href="https://github.com/GreyBeard42">GreyBeard42</a>'
license.classList.add('copyright')
document.body.appendChild(license)

let isHalloween = (new Date().getMonth() == 9)
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

buttons()

function buttons() {
    if(isHalloween) {
        let images = ["holiday/pumpkin.png", "holiday/pumpkClose.png"]
        pumpkin = document.createElement("img")
        pumpkin.src = images[0]
        pumpkin.alt = "A Pumpkin icon that opens a halloween mini-game"
        pumpkin.classList.add("open")
        if(location.href.split("/").slice(-1) == "photography.html") pumpkin.style.bottom = "6vh"
        pumpkin.addEventListener("click", () => {
            if(pumpkin.src.includes(images[1])) {
                pumpkin.src = images[0]
                canvas.style.visibility = 'hidden'
                music.stop()
            } else {
                setup()
                draw = () => {if(isHalloween && canvas.style.visibility == 'visible') tick()}
                pumpkin.src = images[1]
                canvas.style.visibility = 'visible'
            }
        })
        document.body.appendChild(pumpkin)
    }
}

function preload() {
    if(isHalloween) music = loadSound("/holiday/Halloween.mp3")
}

function setup() {
    if(isHalloween) {
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
    if(isHalloween && canvas.style.visibility == 'visible') tick()
}

function halloween() {
    isHalloween = true
    preload()
    setup()
    buttons()
}