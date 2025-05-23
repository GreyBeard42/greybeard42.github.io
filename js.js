console.log("Hello fellow nerd!")
let gdata

fetch("javascript.json")
    .then(file => file.json())
    .then(data => {
        let url = new URLSearchParams(window.location.search)
        let p = decodeURIComponent(url.get("p"))
        if(p === "null") {
            let redirect = 0
            url = new URL(window.location)
            url.searchParams.set("p", encodeURIComponent(data[redirect].name))
            window.history.pushState({}, '', url)
            p = data[redirect].name
        }

        let id
        let i = 0
        data.forEach((d) => {
            if(d.name.toLowerCase() === p.toLowerCase()) id = i
            i++
        })
        gdata = data[id]
        page(gdata)
    })

async function page(data) {
    //Load HTML additions
    if(data.HTML) document.body.innerHTML += data.HTML
    //Load inputs/options
    let options = document.createElement("a")
    options.innerHTML = data.options
    if(data.options) {
        document.getElementById("date").before(options)
        if(data.name !== "Frogger") info.innerHTML += " <b>|</b>"
    }
    //Change box name
    if(!data.box) {
        data.box = "canvas"
    }
    if(data.box) {
        let box = document.createElement("div")
        box.id = data.box
        document.body.appendChild(box)
    }
    //Overflow
    if(data.overflow === "shown") document.body.style = "overflow-y: scroll;"
    //Upercase text for Frogger
    if(data.name === "Frogger") {
        back.innerText = 'BACK'
        info.innerText = "INFO"
    }
    if(!data.textcolor) data.textcolor = "white"
    //Load style
    if(data.style) {
        let style = document.createElement("link")
        style.rel = "stylesheet"
        style.href = data.style
        document.head.appendChild(style)
    }
    if(data.bigcanvas) {
        document.getElementById(data.box).classList.add("bigcanvas")
        if(!data.topSolid) {
            document.getElementById("back").style = `color: ${data.textcolor};`
            document.getElementById("info").style = `color: ${data.textcolor};`
            document.getElementById("date").style = `float: right; color: ${data.textcolor}; margin: 0;`
            options.style = `color: ${data.textcolor};`
            //document.getElementById("top").style = "background-color: rgba(100, 100, 100, 0.15);"
        }
    }
    if(data.topSolid) document.getElementById("top").style = "background-color: rgba(4, 48, 34, 0.8);"
    else document.getElementById("top").style = ""
    if(data.background) {
        document.body.style.background = data.background
        if(!data.topSolid) {
            document.getElementById("back").style = `color: ${data.textcolor};`
            document.getElementById("info").style = `color: ${data.textcolor};`
            document.getElementById("date").style = `float: right; color: ${data.textcolor}; margin: 0;`
            options.style = `color: ${data.textcolor};`
            //document.getElementById("top").style = "background-color: rgba(100, 100, 100, 0.15);"
        }
    }
    //Load custom fonts
    if(data.font) {
        if(data.font.includes("https://")) {
            let fontFile = new FontFace(
                "Custom Font",
                `url(${data.font})`
            )
            document.fonts.add(fontFile)
            document.body.style.fontFamily = "Custom Font, Beardy, sans-serif"
        } else document.body.style.fontFamily = data.font
        
    }

    //loadScripts
    if(data.p5) {
        console.log("loading p5")
        await script("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js");
        console.log("done loading p5");
    }
    if(data.p5Sound) {
        console.log("loading p5 sound");
        await script("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js");
        console.log("done loading p5 sound");
    }
    for(let s of data.scripts) {
        if (!s.includes("/")) s = s + "@main/script.js";
        if (!s.includes("https://")) s = `https://cdn.jsdelivr.net/gh/GreyBeard42/${s}`;
        console.log("loading script");
        await script(s);
        console.log("done loading script");
    }

    if(typeof p5 !== "undefined") {
        if(typeof setup !== "undefined") window.setup = setup
        if(typeof draw !== "undefined") window.draw  = draw
        new p5()
    }

    //Set page title
    document.title = data.name+" - GreyBeard42's Homepage"
    date.innerText = data.date

    //make info tab
    console.log("ended page build")
    makeInfo(data)
}

function script(src) {
    return new Promise((resolve, reject) => {
        console.log(`lets make ${src}`)
        let script = document.createElement("script")
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            console.log(`Script ${src} loaded`)
            resolve(`Script ${src} loaded`)
        }
        script.onerror = () => reject(new Error(`Script ${src} failed to load`))
    })
}

function makeInfo(data) {
    let close = document.createElement("p")
    close.innerText = "X"
    close.style = "position: absolute; top: 5px; right: 10px; margin: 0; font-size: 30px;"
    close.addEventListener('click', () => {infobox.style.display = "none"})
    infobox.appendChild(close)

    let title = document.createElement("h1")
    title.innerText = data.name
    infobox.appendChild(title)

    let github = document.createElement('a')
    github.innerText = "View Repository on Github"
    github.href = "https://github.com/GreyBeard42/"+data.repo
    github.target = "_blank"
    infobox.appendChild(github)

    let readmetitle = document.createElement('a')
    readmetitle.innerText = "Readme File:"
    readmetitle.style = "display: block; margin-top: 1.5em;"
    infobox.appendChild(readmetitle)

    fetch(`https://raw.githubusercontent.com/GreyBeard42/${data.repo}/main/README.md`)
        .then(file => file.text())
        .then(text => {
            let readme = document.createElement('div')
            readme.classList.add("readme")

            let repo = data.repo
            if(!repo.includes("@")) repo += "@main"
            let renderer = new marked.Renderer()
            renderer.image = (href, title, text) => {
                let correctedHref
                if(!href.href.includes("https://")) {
                    correctedHref = typeof href === 'string'
                        ? href
                        : `https://cdn.jsdelivr.net/gh/GreyBeard42/${repo}/` + href.href
                } else {
                    correctedHref = typeof href === 'string'
                        ? href
                        : href.href
                }
                return `<img src="${correctedHref}" alt="${text}" title="${title || ''}" style="max-width:100%;">`
            }
            readme.innerHTML = marked.parse(text, { renderer })
            infobox.appendChild(readme)
        })
        .then(() => {
            fetch(`https://api.github.com/repos/greybeard42/${data.repo}/commits/main`)
                .then(file => file.json())
                .then(data => {
                    if(data) {
                        let commit = document.createElement('a')
                        commit.innerText = "Latest Commit:"
                        commit.style = "display: block; margin-top: 1.5em;"
                        infobox.appendChild(commit)

                        let commitbox = document.createElement("div")
                        commitbox.classList.add("readme")
                        commitbox.style = "margin-bottom: 30px;"

                        let cmessage = document.createElement("h1")
                        cmessage.innerText = data.commit.message
                        commitbox.appendChild(cmessage)

                        let when = document.createElement('a')
                        let d = new Date(data.commit.author.date)
                        when.innerText = `${d.getHours()%12}:${d.getMinutes()} ${["AM", "PM"][Math.round(d.getHours()/12-1)]} - ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
                        when.style = "display: block;"
                        commitbox.appendChild(when)

                        let changet = document.createElement('h3')
                        changet.innerText = "Changed Files:"
                        commitbox.appendChild(changet)

                        data.files.forEach((f) => {
                            let change = document.createElement('p')
                            change.innerText = "- "+f.filename
                            commitbox.appendChild(change)
                        })

                        infobox.appendChild(commitbox)
                    } else {
                        let extra = ""
                        if(file.status === 403) extra = ", API Limit"
                        console.log(`Failed to fetch commit data:\nError ${file.status}${extra}`)
                    }
                })
        })
}

function infoToggle() {
    if(infobox.style.display === "block") infobox.style.display = "none"
    else infobox.style.display = "block"
}