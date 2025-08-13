console.log("Hello fellow nerd!")

let isaprfools = (new Date().getMonth() == 3 && new Date().getDate() == 1)
let isHalloween = (new Date().getMonth() == 9)
let isThankg = (new Date().getMonth() == 10)
let isChristmas = (new Date().getMonth() == 11)

let iframe = document.createElement("iframe")
iframe.style = "position: fixed; width: 97vw; height: 97vh; top: 1vh; left: 1vw; border: #9adbc6 solid 0.25vw;"
iframe.on = false

let icon = document.createElement("img")
let images
if(isHalloween) {
    images = ["holiday/pumpkin.png", "holiday/pumpkClose.png"]
    icon.src = images[0]
    icon.alt = "A Pumpkin icon that opens a Halloween mini-game"
    iframe.src = "holiday/halloween.html"
}
if(isThankg) {
    images = ["holiday/turkey.png"]
    icon.src = images[0]
    icon.alt = "A Turkey icon that opens a Thanksgiving mini-game"
    iframe.src = "holiday/thanksgiving.html"
}
if(isChristmas) {
    let leftBack = document.createElement("div")
    let rightBack = document.createElement("div")
    let height = Math.max(document.body.scrollHeight, document.body.offsetHeight,  document.documentElement.clientHeight,  document.documentElement.scrollHeight,  document.documentElement.offsetHeight)
    leftBack.style = `width: 5vw; height: ${height}px; position: absolute; left: 1vw; top: 0; z-index: -5; background: url(holiday/garland.png); background-repeat: repeat-y; background-size: 100%;`
    document.body.appendChild(leftBack)

    rightBack.style = `width: 5vw; height: ${height}px; position: absolute; right: 1vw; top: 0; z-index: -5; background: url(holiday/garland.png); background-repeat: repeat-y; background-size: 100%;`
    document.body.appendChild(rightBack)
    
    let back = document.createElement("img")
    back.src = "holiday/garland.png"
    back.style = "width: 5vw; height: 35vw; position: absolute; left: 1vw; top: 0; z-index: -5;"
}
icon.classList.add("open")
if(location.href.split("/").slice(-1) == "photography.html") icon.style.bottom = "6vh"
icon.addEventListener("click", () => {
    if(iframe.on) {
        iframe.on = false
        icon.src = images[0]
        iframe.remove()
    } else {
        iframe.on = true
        if(images.length > 1) icon.src = images[1]
        document.body.appendChild(iframe)
    }
})
document.body.appendChild(icon)

if (isaprfools) {
    let style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "aprfools.css"
    document.head.appendChild(style)
}