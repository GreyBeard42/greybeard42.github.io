console.log("Hello fellow nerd!")

let license = document.createElement('p')
license.innerHTML = '<a href="https://github.com/GreyBeard42/greybeard42.github.io/blob/main/LICENSE">View License</a> <br> Copyright (c) 2024 <a href="https://github.com/GreyBeard42">GreyBeard42</a>'
license.classList.add('copyright')
document.body.appendChild(license)

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