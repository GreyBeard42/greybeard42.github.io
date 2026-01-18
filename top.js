let items = [
    {title: "EXPLORE", link: "explore"},
    {title: "ABOUT", link: "about"}
]

let overlay = document.getElementById("overlay")

let outer = document.createElement("div")
outer.classList.add('topnav')
outer.id = "topnav"

let homeIconOuter = document.createElement("a")
homeIconOuter.href="../"
let homeIcon = document.createElement("img")
homeIcon.src = "images/favicon.png"
homeIconOuter.appendChild(homeIcon)
outer.appendChild(homeIconOuter)

items.forEach((i) => {
    let link = document.createElement("a")
    link.innerText = i.title
    link.href = i.link
    outer.appendChild(link)
})

let searchbar = document.createElement("input")
searchbar.classList.add("searchbar")
searchbar.placeholder = "Search"
searchbar.name = "search"
searchbar.autocomplete = "off"
searchbar.type = "search"
searchbar.inputMode = "search"
outer.appendChild(searchbar)

searchbar.addEventListener("keydown", (e) => {
    if(e.key != "Enter") return
    window.location.href = "../explore.html?query=" + encodeURIComponent(searchbar.value)
})

overlay.appendChild(outer)