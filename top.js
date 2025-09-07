let items = [
    {title: "HOME", link: "/"},
    {title: "JAVASCRIPT", link: "javascript"},
    {title: "PICO-8", link: "lua"},
    {title: "PHOTOGRAPHY", link: "photography"},
    {title: "ART", link: "art"},
    {title: "ABOUT", link: "about"}
]

let outer = document.createElement("div")
outer.classList.add('topnav')

items.forEach((i) => {
    let link = document.createElement("a")
    link.innerText = i.title
    link.href = i.link
    outer.appendChild(link)
})

document.body.appendChild(outer)
document.body.appendChild(document.createElement("br"))