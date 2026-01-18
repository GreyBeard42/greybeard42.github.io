document.getElementById("p").focus()

let urlParams = new URLSearchParams(window.location.search)
let repo = urlParams.get('p') || 'corncountry'
urlParams.set('p',repo)
window.history.replaceState(null,'','?'+urlParams.toString())

document.title = repo+" - GreyBeard42's Homepage"

let full = urlParams.get("f") == "true"
urlParams.set('f',full)
window.history.replaceState(null,'','?'+urlParams.toString())
let esc = null
let escTimeout = null
let escInt
setFull(full)
function setFull(f) {
    if(f) {
        if (escTimeout) clearTimeout(escTimeout)
        esc = document.createElement("p")
        esc.innerHTML = "Exit full screen (5s)"
        let i = 5
        escInt = setInterval(() => {
            i-=1
            esc.innerHTML = `Exit full screen (${i}s)`
        }, 1000)
        esc.classList.add("esc")
        esc.addEventListener("click", () => {setFull(false)})
        document.body.appendChild(esc)
        escTimeout = setTimeout(() => {if (esc) esc.remove(); esc = null; escTimeout = null;}, 5000)
        document.getElementById("p").style = "position: absolute; top: 0; left: 0; height: 100vh; width: 100vw; border: none;"
        full = true
        if(urlParams.get("f") == "true") return
        urlParams.set('f',"true")
        window.history.pushState(null,'','?'+urlParams.toString())
    } else {
        if(escInt) clearInterval(escInt)
        if (escTimeout) clearTimeout(escTimeout)
        escTimeout = null
        if (esc) {
            esc.remove()
            esc = null
        }
        document.getElementById("p").style = ""
        full = false
        if(urlParams.get("f") == "false") return
        urlParams.set('f',"false")
        window.history.pushState(null,'','?'+urlParams.toString())
    }
}
document.getElementById("fullscreen").addEventListener("click", () => {
    setFull(true)
})
setInterval(() => {
    let currentParams = new URLSearchParams(window.location.search)
    let currentFull = currentParams.get("f") == "true"
    if (currentFull !== full) {
        setFull(false)
    }
}, 500)

fetch(`https://cdn.jsdelivr.net/gh/GreyBeard42/${repo}@main/index.html`)
    .then(e => e.text())
    .then(a => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(a, 'text/html')
        
        let base = doc.querySelector('base')
        if (!base) {
            base = doc.createElement('base')
            base.href = `https://cdn.jsdelivr.net/gh/GreyBeard42/${repo}@main/`
            const head = doc.querySelector('head') || doc.documentElement
            head.insertBefore(base, head.firstChild)
        }
        
        const links = doc.querySelectorAll('a')
        links.forEach(link => {
            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank')
                link.setAttribute('rel', 'noopener noreferrer')
            }
        })
        
        const modified = doc.documentElement.outerHTML
        document.getElementById("p").srcdoc = modified
    })

fetch(`https://cdn.jsdelivr.net/gh/GreyBeard42/${repo}@main/metadata.json`)
    .then(e => e.json())
    .then(a => {
        let pdata = document.getElementById("projectdata")
        console.log(a)
        pdata.style = "white-space: normal !important;"
        pdata.innerHTML += `${a.title}<br>`
        pdata.innerHTML += `${a.date}<br>`
        pdata.innerHTML += `${a.desc}<br><br>`
        pdata.innerHTML += `Status: ${a.status}<br>`
        pdata.innerHTML += `Version: ${a.version}<br><br>`
        pdata.innerHTML += `Tags: ${a.tags.join(", ")}<br><br>`
        pdata.innerHTML += `<a target="_blank" href="https://github.com/GreyBeard42/${repo}">View on github</a>`
    })