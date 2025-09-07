let links
fetch("lua.json")
    .then(file => file.json())
    .then(data => links=data)
    .then(() => {
        links.forEach(l => {
            let outer = document.createElement("div")
            outer.style = "width: 100%; display: flex; flex-direction: column; align-items: center;"
            let h1 = document.createElement("h1")
            h1.innerText = l.title+" - "+l.date
            outer.appendChild(h1)
            let br = document.createElement("br")
            outer.appendChild(br)
            let iframe = document.createElement("iframe")
            iframe.src = l.link
            iframe.width = "621"
            iframe.height = "513"
            iframe.allowFullscreen = true
            iframe.style.border = "none"
            iframe.style.overflow = "hidden"
            iframe.scrolling = "no"
            outer.appendChild(iframe)
            document.getElementById("content").appendChild(outer)
        })
    })