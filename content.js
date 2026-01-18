console.log("Hello fellow nerd!")

let isaprfools = (new Date().getMonth() == 3 && new Date().getDate() == 1)
let isHalloween = (new Date().getMonth() == 9)
let isThankg = (new Date().getMonth() == 10)
let isChristmas = (new Date().getMonth() == 11)

function minigameConstructor(repo,image) {
    let link = document.createElement("a")
    link.href = "../p?p="+repo
    link.style = "padding: 2px;"
    let img = document.createElement("img")
    img.src = `https://cdn.jsdelivr.net/gh/GreyBeard42/${repo}@main/${image}`
    img.classList.add("minigameIcon")
    link.appendChild(img)
    document.getElementById("topnav").appendChild(link)
}

if(isHalloween) {
    minigameConstructor("halloween","pumpkin.png")
}
if(isThankg) {
    minigameConstructor("thanksgiving","turkey.png")
}
if(isChristmas) {
    let page = document.getElementById("page")
    if(!page) page = document.getElementsByName("page")[0]
    
    let back = document.createElement("div")
    let height = Math.max(document.body.scrollHeight, document.body.offsetHeight,  document.documentElement.clientHeight,  document.documentElement.scrollHeight,  document.documentElement.offsetHeight)
    back.style = `width: 4vw; height: ${height}px; position: fixed; right: 1vw; top: 0; z-index: -5; background: url(images/garland.png); background-repeat: repeat-y; background-size: 100%;`
    page.appendChild(back)
}
if (isaprfools) {
    let style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "aprfools.css"
    document.head.appendChild(style)

    document.getElementById("topnav").innerHTML += "<a>April Fools!</a>"
}